import React, { useState } from 'react';

const Confirmation = ({ selectedCourses, totalCredits, onBack, onConfirm }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const enrolledCourses = selectedCourses.filter(course => course.status !== 'waitlist');
  const waitlistedCourses = selectedCourses.filter(course => course.status === 'waitlist');

  const handleConfirm = () => {
    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      onConfirm();
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirm Registration</h3>
        
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-sm font-medium text-green-800">Ready to submit registration</span>
          </div>
        </div>

        {/* Final Summary */}
        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-gray-800 mb-3">Registration Summary</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Total Courses:</span>
                <span className="font-medium ml-2">{selectedCourses.length}</span>
              </div>
              <div>
                <span className="text-gray-600">Total Credits:</span>
                <span className="font-medium ml-2">{totalCredits}</span>
              </div>
              <div>
                <span className="text-gray-600">Enrolled:</span>
                <span className="font-medium ml-2 text-green-600">{enrolledCourses.length}</span>
              </div>
              <div>
                <span className="text-gray-600">Waitlisted:</span>
                <span className="font-medium ml-2 text-yellow-600">{waitlistedCourses.length}</span>
              </div>
            </div>
          </div>
          
          {enrolledCourses.length > 0 && (
            <div className="mb-4">
              <h5 className="font-medium text-gray-800 mb-2">Enrolled Courses</h5>
              <div className="space-y-2">
                {enrolledCourses.map(course => (
                  <div key={course.id} className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span>{course.code} - {course.name}</span>
                    <span className="text-green-600 font-medium">{course.credits} credits</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {waitlistedCourses.length > 0 && (
            <div className="mb-4">
              <h5 className="font-medium text-gray-800 mb-2">Waitlisted Courses</h5>
              <div className="space-y-2">
                {waitlistedCourses.map(course => (
                  <div key={course.id} className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                    <span>{course.code} - {course.name}</span>
                    <span className="text-yellow-600 font-medium">{course.credits} credits</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Important Notes:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Registration is binding once confirmed</li>
            <li>• Waitlisted courses will notify you if spots become available</li>
            <li>• Changes after registration may incur fees</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between">
        <button 
          onClick={onBack}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
          disabled={isProcessing}
        >
          Back: Review Conflicts
        </button>
        <button 
          onClick={handleConfirm}
          disabled={isProcessing}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isProcessing ? 'Processing...' : 'Confirm Registration'}
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
