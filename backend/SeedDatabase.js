const mongoose = require('mongoose');
const Question = require('./models/Question');

const sampleQuestions = 
[
    { text: "What is the main advantage of EV batteries over traditional gasoline engines?", options: ["Faster acceleration", "Lower emissions", "Higher fuel efficiency", "Longer range"], answer: "Lower emissions" },
    { text: "Which material is commonly used in the production of EV batteries?", options: ["Lithium", "Aluminum", "Iron", "Copper"], answer: "Lithium" },
    { text: "What is the primary component of an EV's powertrain?", options: ["Battery", "Motor", "Transmission", "Fuel cell"], answer: "Battery" },
    { text: "What does the acronym 'EV' stand for?", options: ["Electric Vehicle", "Enhanced Vehicle", "Eco Vehicle", "Energy Vehicle"], answer: "Electric Vehicle" },
    { text: "Which of these companies is known for manufacturing electric vehicles?", options: ["Tesla", "Ford", "Chevrolet", "Toyota"], answer: "Tesla" },
    { text: "What is the typical voltage range for an EV battery?", options: ["12V-24V", "36V-48V", "72V-96V", "300V-800V"], answer: "300V-800V" },
    { text: "What does a 'DC fast charger' do?", options: ["Charges the battery slowly", "Provides a quick charge to the battery", "Discharges the battery", "Charges only at night"], answer: "Provides a quick charge to the battery" },
    { text: "Which technology is crucial for the efficiency of EV charging?", options: ["Solar panels", "Wireless charging", "Regenerative braking", "Active cooling systems"], answer: "Regenerative braking" },
    { text: "Which part of an EV is responsible for regenerative braking?", options: ["Battery", "Motor", "Chassis", "Inverter"], answer: "Motor" },
    { text: "Which is a key challenge in the EV battery supply chain?", options: ["Battery disposal", "Limited raw materials", "Lack of charging stations", "Overproduction of batteries"], answer: "Limited raw materials" },
    { text: "How long does it typically take for a fast charger to fully charge an EV?", options: ["30 minutes", "1 hour", "2 hours", "8 hours"], answer: "30 minutes" },
    { text: "What is one major environmental benefit of electric vehicles?", options: ["Reduced air pollution", "Lower manufacturing cost", "More jobs in fossil fuel industries", "Increased traffic congestion"], answer: "Reduced air pollution" },
    { text: "What is a key consideration when designing an EV for mass-market production?", options: ["Range and charging time", "Color options", "Sound system", "Tire design"], answer: "Range and charging time" },
    { text: "What type of motor is most commonly used in electric vehicles?", options: ["AC induction motor", "DC brushed motor", "Brushless DC motor", "Synchronous motor"], answer: "AC induction motor" },
    { text: "What is one major advantage of using lithium-ion batteries in EVs?", options: ["Low cost", "High energy density", "Ease of recycling", "High voltage tolerance"], answer: "High energy density" },
    { text: "Which factor affects the efficiency of an EV's battery?", options: ["Battery temperature", "Vehicle color", "Type of tires", "Length of charging cable"], answer: "Battery temperature" },
    { text: "Which of these is not a common challenge for EV adoption?", options: ["Battery cost", "Charging infrastructure", "Long refueling times", "Consumer awareness"], answer: "Long refueling times" },
    { text: "What is the primary function of the inverter in an EV?", options: ["Convert AC to DC", "Convert DC to AC", "Control charging speed", "Store energy"], answer: "Convert DC to AC" },
    { text: "How does regenerative braking contribute to EV efficiency?", options: ["By using wind power", "By converting kinetic energy into electrical energy", "By cooling the battery", "By reducing tire wear"], answer: "By converting kinetic energy into electrical energy" },
    { text: "What is the main purpose of the electric vehicle control unit (VCU)?", options: ["Manage the battery charging cycle", "Monitor tire pressure", "Control the electric motor and power distribution", "Cool the motor"], answer: "Control the electric motor and power distribution" },
    { text: "What is one common advantage of EVs over traditional vehicles?", options: ["More expensive to maintain", "Silent operation", "Higher maintenance cost", "Dependence on gasoline"], answer: "Silent operation" },
    { text: "What does 'range anxiety' refer to?", options: ["Fear of running out of charge before reaching a destination", "Fear of the vehicle being too large", "Fear of high fuel costs", "Fear of the battery being too large"], answer: "Fear of running out of charge before reaching a destination" },
    { text: "Which is a key feature of a solid-state battery?", options: ["Low energy density", "Fast charging time", "Increased risk of fire", "No liquid electrolyte"], answer: "No liquid electrolyte" },
    { text: "What role does the battery management system (BMS) play in an EV?", options: ["Manages battery charging and discharging", "Controls the electric motor speed", "Regulates tire pressure", "Increases battery size"], answer: "Manages battery charging and discharging" },
    { text: "What is a major advantage of using solid-state batteries in electric vehicles?", options: ["Lower cost", "Higher energy density", "Slower charging times", "Higher risk of overheating"], answer: "Higher energy density" },
    { text: "Which company is known for developing the first commercially successful electric vehicle?", options: ["Nissan", "Tesla", "Chevrolet", "BMW"], answer: "Tesla" },
    { text: "How does EV adoption help reduce global greenhouse gas emissions?", options: ["By increasing electricity demand", "By reducing dependence on fossil fuels", "By increasing fuel consumption", "By promoting coal energy use"], answer: "By reducing dependence on fossil fuels" },
    { text: "What is the main disadvantage of using an electric vehicle?", options: ["Limited range", "High cost of charging stations", "Availability of fuel", "Lack of electric motors"], answer: "Limited range" },
    { text: "Which company is leading the development of autonomous EV technology?", options: ["Google", "Apple", "Tesla", "General Motors"], answer: "Tesla" },
    { text: "Which of these is not a type of EV charger?", options: ["Level 1", "Level 2", "Level 3", "Supercharger"], answer: "Supercharger" },
    { text: "What is the typical lifespan of an EV battery?", options: ["5-7 years", "10-15 years", "20-25 years", "30-35 years"], answer: "10-15 years" },
    { text: "Which is a key advantage of an electric vehicle over a hybrid vehicle?", options: ["Better fuel efficiency", "Zero tailpipe emissions", "More horsepower", "Cheaper maintenance"], answer: "Zero tailpipe emissions" },
    { text: "What does a hybrid electric vehicle (HEV) use in addition to an electric motor?", options: ["A diesel engine", "A gasoline engine", "A hydrogen fuel cell", "A supercharger"], answer: "A gasoline engine" },
    { text: "What is the main benefit of vehicle-to-grid (V2G) technology?", options: ["Increased battery life", "Bidirectional energy flow between EVs and the grid", "Faster charging", "Lower vehicle weight"], answer: "Bidirectional energy flow between EVs and the grid" },
    { text: "What is the primary function of the power electronics module (PEM) in an EV?", options: ["Control charging cycles", "Manage battery storage", "Convert energy between AC and DC", "Monitor tire pressure"], answer: "Convert energy between AC and DC" },
    { text: "What is one advantage of a fast-charging station for electric vehicles?", options: ["Reduces the need for power distribution", "Allows for charging within 30 minutes or less", "Increases battery degradation", "Requires no infrastructure"], answer: "Allows for charging within 30 minutes or less" },
    { text: "What is a major component of the EV charging infrastructure?", options: ["Solar panels", "Wind turbines", "Charging stations", "Electric grids"], answer: "Charging stations" },
    { text: "Which is an emerging technology in the field of electric vehicle charging?", options: ["Wireless charging", "Hydrogen fuel cells", "Petrol charging stations", "Overhead cable charging"], answer: "Wireless charging" },
    { text: "What is the main reason to adopt electric vehicles in public transport systems?", options: ["Lower operational costs", "Faster passenger service", "Higher energy consumption", "Less frequent charging stations"], answer: "Lower operational costs" },
    { text: "Which renewable energy source is commonly used to charge electric vehicles?", options: ["Solar energy", "Wind energy", "Hydropower", "Geothermal"], answer: "Solar energy" }
  ];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log('Connected to MongoDB');
    
    // Clear existing data
    const deleteResult = await Question.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} questions`);
    
    // Insert new questions
    const insertedQuestions = await Question.insertMany(sampleQuestions);
    console.log(`Inserted ${insertedQuestions.length} questions`);
    
    // Create indexes
    await Question.init();
    console.log('Indexes created');
    
    process.exit(0);
  } catch (err) {
    console.error('Database seeding failed:', err);
    process.exit(1);
  }
};

seedDatabase();