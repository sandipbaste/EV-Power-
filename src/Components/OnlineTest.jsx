import { useState, useEffect, useRef } from 'react';

const OnlineTest = () => {
  const [questions] = useState([
    { id: 1, text: "What is the main advantage of EV batteries over traditional gasoline engines?", options: ["Faster acceleration", "Lower emissions", "Higher fuel efficiency", "Longer range"], answer: "Lower emissions" },
    { id: 2, text: "Which material is commonly used in the production of EV batteries?", options: ["Lithium", "Aluminum", "Iron", "Copper"], answer: "Lithium" },
    { id: 3, text: "What is the primary component of an EV's powertrain?", options: ["Battery", "Motor", "Transmission", "Fuel cell"], answer: "Battery" },
    { id: 4, text: "What does the acronym 'EV' stand for?", options: ["Electric Vehicle", "Enhanced Vehicle", "Eco Vehicle", "Energy Vehicle"], answer: "Electric Vehicle" },
    { id: 5, text: "Which of these companies is known for manufacturing electric vehicles?", options: ["Tesla", "Ford", "Chevrolet", "Toyota"], answer: "Tesla" },
    { id: 6, text: "What is the typical voltage range for an EV battery?", options: ["12V-24V", "36V-48V", "72V-96V", "300V-800V"], answer: "300V-800V" },
    { id: 7, text: "What does a 'DC fast charger' do?", options: ["Charges the battery slowly", "Provides a quick charge to the battery", "Discharges the battery", "Charges only at night"], answer: "Provides a quick charge to the battery" },
    { id: 8, text: "Which technology is crucial for the efficiency of EV charging?", options: ["Solar panels", "Wireless charging", "Regenerative braking", "Active cooling systems"], answer: "Regenerative braking" },
    { id: 9, text: "Which part of an EV is responsible for regenerative braking?", options: ["Battery", "Motor", "Chassis", "Inverter"], answer: "Motor" },
    { id: 10, text: "Which is a key challenge in the EV battery supply chain?", options: ["Battery disposal", "Limited raw materials", "Lack of charging stations", "Overproduction of batteries"], answer: "Limited raw materials" },
    { id: 11, text: "How long does it typically take for a fast charger to fully charge an EV?", options: ["30 minutes", "1 hour", "2 hours", "8 hours"], answer: "30 minutes" },
    { id: 12, text: "What is one major environmental benefit of electric vehicles?", options: ["Reduced air pollution", "Lower manufacturing cost", "More jobs in fossil fuel industries", "Increased traffic congestion"], answer: "Reduced air pollution" },
    { id: 13, text: "What is a key consideration when designing an EV for mass-market production?", options: ["Range and charging time", "Color options", "Sound system", "Tire design"], answer: "Range and charging time" },
    { id: 14, text: "What type of motor is most commonly used in electric vehicles?", options: ["AC induction motor", "DC brushed motor", "Brushless DC motor", "Synchronous motor"], answer: "AC induction motor" },
    { id: 15, text: "What is one major advantage of using lithium-ion batteries in EVs?", options: ["Low cost", "High energy density", "Ease of recycling", "High voltage tolerance"], answer: "High energy density" },
    { id: 16, text: "Which factor affects the efficiency of an EV's battery?", options: ["Battery temperature", "Vehicle color", "Type of tires", "Length of charging cable"], answer: "Battery temperature" },
    { id: 17, text: "Which of these is not a common challenge for EV adoption?", options: ["Battery cost", "Charging infrastructure", "Long refueling times", "Consumer awareness"], answer: "Long refueling times" },
    { id: 18, text: "What is the primary function of the inverter in an EV?", options: ["Convert AC to DC", "Convert DC to AC", "Control charging speed", "Store energy"], answer: "Convert DC to AC" },
    { id: 19, text: "How does regenerative braking contribute to EV efficiency?", options: ["By using wind power", "By converting kinetic energy into electrical energy", "By cooling the battery", "By reducing tire wear"], answer: "By converting kinetic energy into electrical energy" },
    { id: 20, text: "What is the main purpose of the electric vehicle control unit (VCU)?", options: ["Manage the battery charging cycle", "Monitor tire pressure", "Control the electric motor and power distribution", "Cool the motor"], answer: "Control the electric motor and power distribution" },
    { id: 21, text: "What is one common advantage of EVs over traditional vehicles?", options: ["More expensive to maintain", "Silent operation", "Higher maintenance cost", "Dependence on gasoline"], answer: "Silent operation" },
    { id: 22, text: "What does 'range anxiety' refer to?", options: ["Fear of running out of charge before reaching a destination", "Fear of the vehicle being too large", "Fear of high fuel costs", "Fear of the battery being too large"], answer: "Fear of running out of charge before reaching a destination" },
    { id: 23, text: "Which is a key feature of a solid-state battery?", options: ["Low energy density", "Fast charging time", "Increased risk of fire", "No liquid electrolyte"], answer: "No liquid electrolyte" },
    { id: 24, text: "What role does the battery management system (BMS) play in an EV?", options: ["Manages battery charging and discharging", "Controls the electric motor speed", "Regulates tire pressure", "Increases battery size"], answer: "Manages battery charging and discharging" },
    { id: 25, text: "What is a major advantage of using solid-state batteries in electric vehicles?", options: ["Lower cost", "Higher energy density", "Slower charging times", "Higher risk of overheating"], answer: "Higher energy density" },
    { id: 26, text: "Which company is known for developing the first commercially successful electric vehicle?", options: ["Nissan", "Tesla", "Chevrolet", "BMW"], answer: "Tesla" },
    { id: 27, text: "How does EV adoption help reduce global greenhouse gas emissions?", options: ["By increasing electricity demand", "By reducing dependence on fossil fuels", "By increasing fuel consumption", "By promoting coal energy use"], answer: "By reducing dependence on fossil fuels" },
    { id: 28, text: "What is the main disadvantage of using an electric vehicle?", options: ["Limited range", "High cost of charging stations", "Availability of fuel", "Lack of electric motors"], answer: "Limited range" },
    { id: 29, text: "Which company is leading the development of autonomous EV technology?", options: ["Google", "Apple", "Tesla", "General Motors"], answer: "Tesla" },
    { id: 30, text: "Which of these is not a type of EV charger?", options: ["Level 1", "Level 2", "Level 3", "Supercharger"], answer: "Supercharger" },
    { id: 31, text: "What is the typical lifespan of an EV battery?", options: ["5-7 years", "10-15 years", "20-25 years", "30-35 years"], answer: "10-15 years" },
    { id: 32, text: "Which is a key advantage of an electric vehicle over a hybrid vehicle?", options: ["Better fuel efficiency", "Zero tailpipe emissions", "More horsepower", "Cheaper maintenance"], answer: "Zero tailpipe emissions" },
    { id: 33, text: "What does a hybrid electric vehicle (HEV) use in addition to an electric motor?", options: ["A diesel engine", "A gasoline engine", "A hydrogen fuel cell", "A supercharger"], answer: "A gasoline engine" },
    { id: 34, text: "What is the main benefit of vehicle-to-grid (V2G) technology?", options: ["Increased battery life", "Bidirectional energy flow between EVs and the grid", "Faster charging", "Lower vehicle weight"], answer: "Bidirectional energy flow between EVs and the grid" },
    { id: 35, text: "What is the primary function of the power electronics module (PEM) in an EV?", options: ["Control charging cycles", "Manage battery storage", "Convert energy between AC and DC", "Monitor tire pressure"], answer: "Convert energy between AC and DC" },
    { id: 36, text: "What is one advantage of a fast-charging station for electric vehicles?", options: ["Reduces the need for power distribution", "Allows for charging within 30 minutes or less", "Increases battery degradation", "Requires no infrastructure"], answer: "Allows for charging within 30 minutes or less" },
    { id: 37, text: "What is a major component of the EV charging infrastructure?", options: ["Solar panels", "Wind turbines", "Charging stations", "Electric grids"], answer: "Charging stations" },
    { id: 38, text: "Which is an emerging technology in the field of electric vehicle charging?", options: ["Wireless charging", "Hydrogen fuel cells", "Petrol charging stations", "Overhead cable charging"], answer: "Wireless charging" },
    { id: 39, text: "What is the main reason to adopt electric vehicles in public transport systems?", options: ["Lower operational costs", "Faster passenger service", "Higher energy consumption", "Less frequent charging stations"], answer: "Lower operational costs" },
    { id: 40, text: "Which renewable energy source is commonly used to charge electric vehicles?", options: ["Solar energy", "Wind energy", "Hydropower", "Geothermal"], answer: "Solar energy" }
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const [timeLeft, setTimeLeft] = useState(60 * 1); // 60 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timerRef = useRef(null);

  // Check if all questions are answered
  const allQuestionsAnswered = Object.keys(selectedAnswers).length === questions.length;

  // const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false)
  // Check if timer has ended
  const timerEnded = timeLeft <= 0;

  // Handle timer countdown
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  
    return () => clearInterval(timerRef.current);
  }, []);
  

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (questionId, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    clearInterval(timerRef.current);
    setIsSubmitted(true);
    console.log("Submitted answers:", selectedAnswers);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Test Submitted Successfully!</h1>
          <p className="text-lg text-gray-600 mb-6">
            You answered {Object.keys(selectedAnswers).length} out of {questions.length} questions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-20 bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Main Question Area */}
        <div className="md:w-2/3 bg-white rounded-lg shadow-lg p-6">
          {/* Timer and Question Count */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-semibold text-gray-700">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div
              className={`text-xl font-bold ${
                timeLeft <= 300 ? "text-red-600" : "text-blue-600"
              }`}
            >
              Time Left: {formatTime(timeLeft)}
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-800 mb-4">{currentQuestion.text}</h2>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOptionSelect(currentQuestion.id, option)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedAnswers[currentQuestion.id] === option
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                        selectedAnswers[currentQuestion.id] === option
                          ? "border-blue-500 bg-blue-500 text-white"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedAnswers[currentQuestion.id] === option && (
                        <span className="text-xs">✓</span>
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={goToPrevQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-6 py-2 rounded-lg ${
                currentQuestionIndex === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>
            <div className="flex gap-3">
              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={goToNextQuestion}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!(allQuestionsAnswered || timerEnded)}
                  className={`px-6 py-2 rounded-lg ${
                    allQuestionsAnswered || timerEnded
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit Test
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Question Navigator Sidebar */}
        <div className="md:w-1/3 bg-white rounded-lg shadow-lg p-6 h-fit sticky top-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Question Navigator</h3>
          <div
            className="grid grid-cols-5 gap-3 overflow-y-auto max-h-[400px] p-4"
            style={{ scrollbarWidth: "thin" }}
          >
            {questions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => goToQuestion(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedAnswers[q.id]
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-gray-100 text-gray-800 border border-gray-300"
                } ${
                  currentQuestionIndex === index ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-100 border border-green-300 mr-2"></div>
              <span className="text-sm text-gray-600">Answered</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-yellow-100 border border-yellow-300 mr-2"></div>
              <span className="text-sm text-gray-600">Skipped/Not Attempted</span>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!(allQuestionsAnswered || timerEnded)}
            className={`w-full mt-6 py-2 rounded-lg ${
              allQuestionsAnswered || timerEnded
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit Test Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineTest;