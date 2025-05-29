const mongoose = require('mongoose');

const AptitudeSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'Question is required'],
    trim: true,
    minlength: [10, 'Question must be at least 10 characters'],
    maxlength: [500, 'Question cannot exceed 500 characters'],
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
    ref: 'HrLogin'
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
    ref: 'HrLogin'
  }
}, {
  timestamps: true, // Automatically manages createdAt and updatedAt
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Middleware to prevent duplicate questions
AptitudeSchema.pre('save', async function(next) {
  if (this.isNew) {
    const existingQuestion = await this.constructor.findOne({ 
      question: this.question 
    });
    
    if (existingQuestion) {
      throw new Error('Question already exists in database');
    }
  }
  next();
});

// Update timestamp and modifier before saving
AptitudeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  // In a real app, you'd set lastModifiedBy from auth conquestion
  next();
});

// Indexes for better query performance
AptitudeSchema.index({ question: 'question' }); // Full-question search
AptitudeSchema.index({ category: 1, difficulty: 1 });
AptitudeSchema.index({ isActive: 1 });

// Virtual for formatted display
AptitudeSchema.virtual('displayquestion').get(function() {
  return `${this.question} (${this.category}, ${this.difficulty})`;
});

// Static method for bulk insert with duplicate prevention
AptitudeSchema.statics.insertQuestions = async function(questions) {
  const existingQuestions = await this.find({ 
    question: { $in: questions.map(q => q.question) } 
  });
  
  const existingquestions = new Set(existingQuestions.map(q => q.question));
  const newQuestions = questions.filter(q => !existingquestions.has(q.question));
  
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
AptitudeSchema.query.active = function() {
  return this.where({ isActive: true });
};

module.exports = mongoose.model('aptitude', AptitudeSchema);