import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserTestsTable = () => {
  const [userTests, setUserTests] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
    const savedTests = JSON.parse(localStorage.getItem('userTests') || '[]');
    setUserTests(savedTests);
  }, []);

  const handleViewResults = (testData) => {
    navigate('/results', { state: testData });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Test Attempt History</h1>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userTests.map((test, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{test.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(test.testDate).toLocaleDateString()} {new Date(test.testDate).toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {test.score} / {test.totalQuestions} ({test.percentage}%)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button 
                      onClick={() => handleViewResults(test)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View Results
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {userTests.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No test attempts found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserTestsTable;