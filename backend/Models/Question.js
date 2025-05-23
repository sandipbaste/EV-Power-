const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Question text is required'],
    trim: true,
    minlength: [10, 'Question text must be at least 10 characters'],
    maxlength: [500, 'Question text cannot exceed 500 characters'],
    unique: true, // Ensures no duplicate questions
    index: true // Improves query performance
  },
  options: {
    type: [{
      type: String,
      trim: true,
      minlength: [1, 'Option cannot be empty'],
      maxlength: [200, 'Option cannot exceed 200 characters']
    }],
    required: [true, 'Options are required'],
    validate: {
      validator: function(options) {
        // Ensure options are unique
        return options.length === new Set(options).size && 
               options.length >= 2 && 
               options.length <= 6;
      },
      message: 'Question must have between 2 and 6 unique options'
    }
  },
  answer: {
    type: String,
    required: [true, 'Correct answer is required'],
    validate: {
      validator: function(answer) {
        return this.options.includes(answer);
      },
      message: 'Answer must be one of the provided options'
    }
  },
  category: {
    type: String,
    enum: {
      values: ['Battery', 'Charging', 'General', 'Technology', 'Environmental'],
      message: 'Invalid category'
    },
    default: 'General',
    index: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium',
    index: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true // Prevents modification
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true, // Automatically manages createdAt and updatedAt
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Middleware to prevent duplicate questions
questionSchema.pre('save', async function(next) {
  if (this.isNew) {
    const existingQuestion = await this.constructor.findOne({ 
      text: this.text 
    });
    
    if (existingQuestion) {
      throw new Error('Question already exists in database');
    }
  }
  next();
});

// Update timestamp and modifier before saving
questionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  // In a real app, you'd set lastModifiedBy from auth context
  next();
});

// Indexes for better query performance
questionSchema.index({ text: 'text' }); // Full-text search
questionSchema.index({ category: 1, difficulty: 1 });
questionSchema.index({ isActive: 1 });

// Virtual for formatted display
questionSchema.virtual('displayText').get(function() {
  return `${this.text} (${this.category}, ${this.difficulty})`;
});

// Static method for bulk insert with duplicate prevention
questionSchema.statics.insertQuestions = async function(questions) {
  const existingQuestions = await this.find({ 
    text: { $in: questions.map(q => q.text) } 
  });
  
  const existingTexts = new Set(existingQuestions.map(q => q.text));
  const newQuestions = questions.filter(q => !existingTexts.has(q.text));
  
  if (newQuestions.length === 0) {
    return { insertedCount: 0, duplicates: questions.length };
  }
  
  const result = await this.insertMany(newQuestions);
  return {
    insertedCount: result.length,
    duplicates: questions.length - result.length
  };
};

// Query helper for active questions
questionSchema.query.active = function() {
  return this.where({ isActive: true });
};

module.exports = mongoose.model('Question', questionSchema);