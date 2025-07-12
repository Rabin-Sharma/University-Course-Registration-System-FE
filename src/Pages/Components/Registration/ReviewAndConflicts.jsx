import React, { useEffect, useState } from 'react';
import { checkConflicts } from '../../../Services/api';

const ReviewAndConflicts = ({ 
  selectedCourses, 
  conflicts, 
  setConflicts,
  totalCredits, 
  onBack, 
  onNext 
}) => {
  const [isCheckingConflicts, setIsCheckingConflicts] = useState(false);
  const [conflictError, setConflictError] = useState(null);

  // Check conflicts when component mounts or selected courses change
  useEffect(() => {
    const checkForConflicts = async () => {
      // if (selectedCourses.length < 2) {
      //   setConflicts([]);
      //   return;
      // }

      try {
        setIsCheckingConflicts(true);
        setConflictError(null);
        
        const courseIds = selectedCourses.map(course => course.id);
        const conflictData = await checkConflicts(courseIds);
        
        setConflicts(conflictData.conflicts || []);
      } catch (error) {
        setConflictError('Failed to check conflicts. Please try again.');
        console.error('Error checking conflicts:', error);
      } finally {
        setIsCheckingConflicts(false);
      }
    };

    checkForConflicts();
  }, [selectedCourses, setConflicts]);
  return (
    <div>
      {/* Conflict Checking Loading */}
      {isCheckingConflicts && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mb-6">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-3"></div>
            <span className="text-blue-800">Checking for schedule conflicts...</span>
          </div>
        </div>
      )}

      {/* Conflict Error */}
      {conflictError && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-xl mb-6">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 2h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="text-sm font-medium text-red-800">Error Checking Conflicts</h3>
              <p className="mt-1 text-sm text-red-700">{conflictError}</p>
            </div>
          </div>
        </div>
      )}

      {/* Conflict Detection */}
      {conflicts.length > 0 && !isCheckingConflicts && (
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
                    • {conflict.course1?.code || conflict.course1} conflicts with {conflict.course2?.code || conflict.course2} 
                    {conflict.reason && ` (${conflict.reason})`}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Message when no conflicts */}
      {conflicts.length === 0 && !isCheckingConflicts && !conflictError &&selectedCourses.length > 1 && (
        <div className="bg-green-50 border border-green-200 p-4 rounded-xl mb-6">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="text-sm font-medium text-green-800">No Schedule Conflicts</h3>
              <p className="mt-1 text-sm text-green-700">All selected courses are compatible.</p>
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
          disabled={isCheckingConflicts || conflicts.length > 0}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isCheckingConflicts ? 'Checking...' : 'Next: Confirm Registration'}
        </button>
      </div>
    </div>
  );
};

export default ReviewAndConflicts;
