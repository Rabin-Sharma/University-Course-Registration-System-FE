import React from 'react';

const ReviewAndConflicts = ({ 
  selectedCourses, 
  conflicts, 
  waitlistCourses, 
  totalCredits, 
  onBack, 
  onNext 
}) => {
  return (
    <div>
      {/* Conflict Detection */}
      {conflicts.length > 0 && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-xl mb-6">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            <div>
              <h3 className="text-sm font-medium text-red-800">Schedule Conflicts Detected</h3>
              <div className="mt-2 text-sm text-red-700">
                {conflicts.map((conflict, index) => (
                  <p key={index}>
                    • {conflict.course1.code} conflicts with {conflict.course2.code} (schedule overlap)
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Waitlist Options */}
      {waitlistCourses.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl mb-6">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="text-sm font-medium text-yellow-800">Courses with Limited Availability</h3>
              <div className="mt-2 text-sm text-yellow-700">
                {waitlistCourses.map((course, index) => (
                  <p key={index}>
                    • {course.code} - {course.name} (Position estimated: {Math.floor(Math.random() * 5) + 1})
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration Summary */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Registration Summary</h3>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h4 className="font-medium text-gray-800 mb-2">Selected Courses ({selectedCourses.length})</h4>
            <div className="space-y-2">
              {selectedCourses.map(course => (
                <div key={course.id} className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{course.code}</span> - {course.name}
                    {course.status === 'waitlist' && (
                      <span className="text-yellow-600 text-sm ml-2">(Waitlist)</span>
                    )}
                  </div>
                  <span className="text-gray-600">{course.credits} credits</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">Total Credits:</span>
            <span className="font-semibold text-blue-600">{totalCredits}</span>
          </div>
          {conflicts.length > 0 && (
            <p className="text-red-600 text-sm mt-2">⚠ Schedule conflicts detected above</p>
          )}
          {waitlistCourses.length > 0 && (
            <p className="text-yellow-600 text-sm mt-2">ℹ Some courses require waitlist enrollment</p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <button 
          onClick={onBack}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
        >
          Back: Select Courses
        </button>
        <button 
          onClick={onNext}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Next: Confirm Registration
        </button>
      </div>
    </div>
  );
};

export default ReviewAndConflicts;
