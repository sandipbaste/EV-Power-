import { useState, useEffect, useRef } from 'react';

const OnlineTest = () => {
  const [questions] = useState([
    { id: 1, text: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { id: 2, text: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], answer: "Paris" },
    { id: 3, text: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: "Mars" },
    { id: 4, text: "What is the square root of 16?", options: ["2", "3", "4", "5"], answer: "4" },
    { id: 5, text: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { id: 6, text: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Hemingway", "Austen", "Dickens"], answer: "Shakespeare" },
    { id: 7, text: "What is 5 x 5?", options: ["10", "20", "25", "30"], answer: "25" },
    { id: 8, text: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
    { id: 9, text: "Who invented the light bulb?", options: ["Newton", "Edison", "Tesla", "Bell"], answer: "Edison" },
    { id: 10, text: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], answer: "H2O" },
    { id: 11, text: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Ganges", "Yangtze"], answer: "Nile" },
    { id: 12, text: "What is 9 x 9?", options: ["81", "72", "90", "99"], answer: "81" },
    { id: 13, text: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
    { id: 14, text: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Bangkok", "Tokyo"], answer: "Tokyo" },
    { id: 15, text: "Who painted the Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"], answer: "Da Vinci" },
    { id: 16, text: "What is 12 x 12?", options: ["124", "144", "132", "120"], answer: "144" },
    { id: 17, text: "Which is the smallest planet in the solar system?", options: ["Mercury", "Venus", "Mars", "Earth"], answer: "Mercury" },
    { id: 18, text: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: "6" },
    { id: 19, text: "Who discovered gravity?", options: ["Einstein", "Newton", "Galileo", "Darwin"], answer: "Newton" },
    { id: 20, text: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], answer: "Delhi" },
    { id: 21, text: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: "8" },
    { id: 22, text: "What is the boiling point of water in Celsius?", options: ["90", "100", "120", "150"], answer: "100" },
    { id: 23, text: "Which bird is known for its ability to mimic human speech?", options: ["Sparrow", "Parrot", "Crow", "Eagle"], answer: "Parrot" },
    { id: 24, text: "What is 7 x 7?", options: ["42", "48", "49", "56"], answer: "49" },
    { id: 25, text: "Who is known as the Father of Computers?", options: ["Charles Babbage", "Alan Turing", "Ada Lovelace", "Bill Gates"], answer: "Charles Babbage" },
    { id: 26, text: "Which is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], answer: "Blue Whale" },
    { id: 27, text: "What is the capital of the USA?", options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"], answer: "Washington D.C." },
    { id: 28, text: "What is the value of π (pi)?", options: ["3.14", "2.71", "1.61", "4.13"], answer: "3.14" },
    { id: 29, text: "Which country is known as the Land of the Rising Sun?", options: ["China", "India", "Japan", "South Korea"], answer: "Japan" },
    { id: 30, text: "How many planets are in the solar system?", options: ["7", "8", "9", "10"], answer: "8" },
    { id: 31, text: "What is 8 x 8?", options: ["56", "64", "72", "81"], answer: "64" },
    { id: 32, text: "Which gas is essential for human breathing?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Oxygen" },
    { id: 33, text: "Who was the first man to step on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], answer: "Neil Armstrong" },
    { id: 34, text: "What is 6 x 6?", options: ["30", "36", "42", "48"], answer: "36" },
    { id: 35, text: "Which is the smallest continent?", options: ["Asia", "Europe", "Australia", "Antarctica"], answer: "Australia" },
    { id: 36, text: "Who wrote the Indian national anthem?", options: ["Rabindranath Tagore", "Bankim Chandra", "Subhash Bose", "Mahatma Gandhi"], answer: "Rabindranath Tagore" },
    { id: 37, text: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" },
    { id: 38, text: "How many bones are there in the human body?", options: ["204", "206", "208", "210"], answer: "206" },
    { id: 39, text: "What is 3 x 3?", options: ["6", "9", "12", "15"], answer: "9" },
    { id: 40, text: "Which is the national flower of India?", options: ["Rose", "Lotus", "Sunflower", "Jasmine"], answer: "Lotus" },
    { id: 41, text: "Which animal is known as the Ship of the Desert?", options: ["Horse", "Camel", "Donkey", "Elephant"], answer: "Camel" },
    { id: 42, text: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
    { id: 43, text: "Who invented the telephone?", options: ["Graham Bell", "Edison", "Tesla", "Marconi"], answer: "Graham Bell" },
    { id: 44, text: "What is the tallest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"], answer: "Mount Everest" },
    { id: 45, text: "What is 4 x 4?", options: ["8", "12", "16", "20"], answer: "16" },
    { id: 46, text: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Thar", "Kalahari"], answer: "Sahara" },
    { id: 47, text: "What is the capital of Russia?", options: ["Moscow", "St. Petersburg", "Kiev", "Astana"], answer: "Moscow" },
    { id: 48, text: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: "7" },
    { id: 49, text: "Which planet is closest to the sun?", options: ["Earth", "Venus", "Mars", "Mercury"], answer: "Mercury" },
    { id: 50, text: "What is 10 x 10?", options: ["10", "100", "1000", "10000"], answer: "100" },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timerRef = useRef(null);

  // Handle timer countdown
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
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

  const handleSkip = () => {
    setSkippedQuestions((prev) => [...prev, questions[currentQuestionIndex].id]);
    goToNextQuestion();
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
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Take Test Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
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
              {/* <button
                onClick={handleSkip}
                className="px-6 py-2 bg-blue-600 text-yellow-800 rounded-lg hover:bg-yellow-200"
              >
                Next1
              </button> */}
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
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
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
          {/* Added scrollbar with max height */}
          <div
            className="grid grid-cols-5 gap-3 overflow-y-auto max-h-[400px] pr-2"
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
            className="w-full mt-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Submit Test Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineTest;
