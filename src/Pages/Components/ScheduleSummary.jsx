import React from "react";

const ScheduleSummary = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Schedule Summary
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">5</p>
          <p className="text-sm text-gray-600">Total Courses</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">15</p>
          <p className="text-sm text-gray-600">Credit Hours</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-purple-600">0</p>
          <p className="text-sm text-gray-600">Conflicts</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSummary;
