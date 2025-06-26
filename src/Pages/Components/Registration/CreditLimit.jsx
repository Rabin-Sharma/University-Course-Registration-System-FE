import React from 'react';

const CreditLimit = ({ totalCredits, maxCredits }) => {
  const percentage = (totalCredits / maxCredits) * 100;

  const getProgressBarClass = () => {
    if (totalCredits > maxCredits) {
      return 'bg-red-600 h-2 rounded-full transition-all duration-300';
    } else if (totalCredits > maxCredits * 0.8) {
      return 'bg-yellow-600 h-2 rounded-full transition-all duration-300';
    } else {
      return 'bg-blue-600 h-2 rounded-full transition-all duration-300';
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-sm font-medium text-gray-700">Credit Hours:</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            <span className="font-semibold text-blue-600">{totalCredits}</span>
            <span className="text-gray-500">/ {maxCredits} credits</span>
          </div>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div 
              className={getProgressBarClass()} 
              style={{ width: `${Math.min(percentage, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditLimit;
