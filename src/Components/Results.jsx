import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  
  // Provide safe defaults if state is undefined
  const { 
    questions = [], 
    selectedAnswers = {}, 
    timeSpent = "00:00" 
  } = location.state || {};

  // Calculate score safely
  const score = questions.reduce((acc, question) => {
    const userAnswer = selectedAnswers[question.id];
    return acc + (userAnswer === question.answer ? 1 : 0);
  }, 0);

  // Calculate percentage
  const percentage = questions.length > 0 
    ? ((score / questions.length) * 100).toFixed(1)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 my-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">Test Results</h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-indigo-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Score</h3>
            <p className="text-3xl font-bold text-indigo-600">
              {score}<span className="text-gray-500">/{questions.length}</span>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-indigo-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Percentage</h3>
            <p className="text-3xl font-bold text-indigo-600">{percentage}%</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-indigo-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Time Spent</h3>
            <p className="text-3xl font-bold text-indigo-600">{timeSpent}</p>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">Question Breakdown</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr.no</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candiate Answer</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correct Answer</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {questions.map((question, index) => {
                  const userAnswer = selectedAnswers[question.id];
                  const isCorrect = userAnswer === question.answer;
                  
                  return (
                    <tr key={question.id} className={isCorrect ? 'bg-green-50' : 'bg-red-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{question.text}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{userAnswer || "Not answered"}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{question.answer}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;