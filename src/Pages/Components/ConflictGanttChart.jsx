import React from "react";

const ConflictGanttChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">
          Time Conflict Analysis
        </h3>
        <p className="text-sm text-gray-600">
          Visual representation of course schedules to identify overlaps
        </p>
      </div>

      <div className="p-6">
        {/* Time Axis */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>8:00 AM</span>
            <span>10:00 AM</span>
            <span>12:00 PM</span>
            <span>2:00 PM</span>
            <span>4:00 PM</span>
          </div>
          <div className="h-1 bg-gray-200 rounded"></div>
        </div>

        {/* Course Timeline Bars */}
        <div className="space-y-3">
          {/* CS 101 */}
          <div className="flex items-center">
            <div className="w-24 text-sm font-medium text-gray-700">CS 101</div>
            <div className="flex-1 relative h-6 bg-gray-100 rounded">
              {/* Monday/Wednesday blocks */}
              <div
                className="absolute bg-green-500 h-full rounded"
                style="left: 25%; width: 18.75%;"
              ></div>
              <div
                className="absolute bg-green-500 h-full rounded"
                style="left: 25%; width: 18.75%; top: 2px; opacity: 0.7;"
              ></div>
            </div>
          </div>

          {/* PHYS 151 */}
          <div className="flex items-center">
            <div className="w-24 text-sm font-medium text-gray-700">
              PHYS 151
            </div>
            <div className="flex-1 relative h-6 bg-gray-100 rounded">
              {/* Mon/Wed/Fri blocks */}
              <div
                className="absolute bg-blue-500 h-full rounded"
                style="left: 12.5%; width: 12.5%;"
              ></div>
              <div
                className="absolute bg-blue-500 h-full rounded"
                style="left: 12.5%; width: 12.5%; top: 2px; opacity: 0.7;"
              ></div>
              <div
                className="absolute bg-blue-500 h-full rounded"
                style="left: 12.5%; width: 12.5%; top: 4px; opacity: 0.5;"
              ></div>
            </div>
          </div>

          {/* MATH 101 */}
          <div className="flex items-center">
            <div className="w-24 text-sm font-medium text-gray-700">
              MATH 101
            </div>
            <div className="flex-1 relative h-6 bg-gray-100 rounded">
              {/* Mon/Wed/Fri blocks */}
              <div
                className="absolute bg-purple-500 h-full rounded"
                style="left: 37.5%; width: 12.5%;"
              ></div>
              <div
                className="absolute bg-purple-500 h-full rounded"
                style="left: 37.5%; width: 12.5%; top: 2px; opacity: 0.7;"
              ></div>
              <div
                className="absolute bg-purple-500 h-full rounded"
                style="left: 37.5%; width: 12.5%; top: 4px; opacity: 0.5;"
              ></div>
            </div>
          </div>

          {/* CS 201 */}
          <div className="flex items-center">
            <div className="w-24 text-sm font-medium text-gray-700">CS 201</div>
            <div className="flex-1 relative h-6 bg-gray-100 rounded">
              {/* Tue/Thu blocks */}
              <div
                className="absolute bg-orange-500 h-full rounded"
                style="left: 37.5%; width: 18.75%;"
              ></div>
              <div
                className="absolute bg-orange-500 h-full rounded"
                style="left: 37.5%; width: 18.75%; top: 2px; opacity: 0.7;"
              ></div>
            </div>
          </div>

          {/* MATH 201 */}
          <div className="flex items-center">
            <div className="w-24 text-sm font-medium text-gray-700">
              MATH 201
            </div>
            <div className="flex-1 relative h-6 bg-gray-100 rounded">
              {/* Tue/Thu blocks */}
              <div
                className="absolute bg-indigo-500 h-full rounded"
                style="left: 75%; width: 18.75%;"
              ></div>
              <div
                className="absolute bg-indigo-500 h-full rounded"
                style="left: 75%; width: 18.75%; top: 2px; opacity: 0.7;"
              ></div>
            </div>
          </div>

          {/* ENG 101 */}
          <div className="flex items-center">
            <div className="w-24 text-sm font-medium text-gray-700">
              ENG 101
            </div>
            <div className="flex-1 relative h-6 bg-gray-100 rounded">
              {/* Friday block */}
              <div
                className="absolute bg-red-500 h-full rounded"
                style="left: 62.5%; width: 25%;"
              ></div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Legend:</h4>
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
              <span>No Conflicts</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded mr-1"></div>
              <span>Minor Overlap</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded mr-1"></div>
              <span>Major Conflict</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConflictGanttChart;
