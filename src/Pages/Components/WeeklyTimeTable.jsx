import React from "react";

const WeeklyTimeTable = () => {
  // Get current day of the week
  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return days[today.getDay()];
  };

  const currentDay = getCurrentDay();

  // Function to check if a day is current day
  const isCurrentDay = (day) => {
    return day === currentDay;
  };
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">
          Weekly Timetable
        </h3>
      </div>

      {/* Desktop View */}
      <div className="md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${isCurrentDay('Monday') ? 'bg-blue-50' : ''}`}>
                Monday
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${isCurrentDay('Tuesday') ? 'bg-blue-50' : ''}`}>
                Tuesday
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${isCurrentDay('Wednesday') ? 'bg-blue-50' : ''}`}>
                Wednesday
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${isCurrentDay('Thursday') ? 'bg-blue-50' : ''}`}>
                Thursday
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${isCurrentDay('Friday') ? 'bg-blue-50' : ''}`}>
                Friday
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* 8:00 AM */}
            <tr>
              <td className="px-4 py-4 text-sm text-gray-500 font-medium">
                8:00
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Monday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Tuesday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Wednesday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Thursday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Friday') ? 'bg-blue-50' : ''}`}></td>
            </tr>
            {/* 9:00 AM */}
            <tr>
              <td className="px-4 py-4 text-sm text-gray-500 font-medium">
                9:00
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Monday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-blue-100 text-blue-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">PHYS 151</div>
                  <div className="text-xs">9:00-9:50 AM</div>
                  <div className="text-xs">Dr. Williams</div>
                </div>
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Tuesday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Wednesday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-blue-100 text-blue-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">PHYS 151</div>
                  <div className="text-xs">9:00-9:50 AM</div>
                  <div className="text-xs">Dr. Williams</div>
                </div>
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Thursday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Friday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-blue-100 text-blue-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">PHYS 151</div>
                  <div className="text-xs">9:00-9:50 AM</div>
                  <div className="text-xs">Dr. Williams</div>
                </div>
              </td>
            </tr>
            {/* 10:00 AM */}
            <tr>
              <td className="px-4 py-4 text-sm text-gray-500 font-medium">
                10:00
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Monday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-green-100 text-green-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">CS 101</div>
                  <div className="text-xs">10:00-11:30 AM</div>
                  <div className="text-xs">Dr. Smith</div>
                </div>
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Tuesday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Wednesday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-green-100 text-green-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">CS 101</div>
                  <div className="text-xs">10:00-11:30 AM</div>
                  <div className="text-xs">Dr. Smith</div>
                </div>
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Thursday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Friday') ? 'bg-blue-50' : ''}`}></td>
            </tr>
            {/* 11:00 AM */}
            <tr>
              <td className="px-4 py-4 text-sm text-gray-500 font-medium">
                11:00
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Monday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-purple-100 text-purple-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">MATH 101</div>
                  <div className="text-xs">11:00-11:50 AM</div>
                  <div className="text-xs">Prof. Johnson</div>
                </div>
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Tuesday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-orange-100 text-orange-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">CS 201</div>
                  <div className="text-xs">11:00-12:30 PM</div>
                  <div className="text-xs">Dr. Smith</div>
                </div>
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Wednesday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-purple-100 text-purple-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">MATH 101</div>
                  <div className="text-xs">11:00-11:50 AM</div>
                  <div className="text-xs">Prof. Johnson</div>
                </div>
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Thursday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-orange-100 text-orange-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">CS 201</div>
                  <div className="text-xs">11:00-12:30 PM</div>
                  <div className="text-xs">Dr. Smith</div>
                </div>
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Friday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-purple-100 text-purple-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">MATH 101</div>
                  <div className="text-xs">11:00-11:50 AM</div>
                  <div className="text-xs">Prof. Johnson</div>
                </div>
              </td>
            </tr>
            {/* 12:00 PM */}
            <tr>
              <td className="px-4 py-4 text-sm text-gray-500 font-medium">
                12:00
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Monday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Tuesday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Wednesday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Thursday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Friday') ? 'bg-blue-50' : ''}`}></td>
            </tr>
            {/* 1:00 PM */}
            <tr>
              <td className="px-4 py-4 text-sm text-gray-500 font-medium">
                1:00
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Monday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Tuesday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Wednesday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Thursday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Friday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-red-100 text-red-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">ENG 101</div>
                  <div className="text-xs">1:00-3:00 PM</div>
                  <div className="text-xs">Prof. Brown</div>
                </div>
              </td>
            </tr>
            {/* 2:00 PM */}
            <tr>
              <td className="px-4 py-4 text-sm text-gray-500 font-medium">
                2:00
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Monday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Tuesday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-indigo-100 text-indigo-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">MATH 201</div>
                  <div className="text-xs">2:00-3:30 PM</div>
                  <div className="text-xs">Prof. Johnson</div>
                </div>
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Wednesday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Thursday') ? 'bg-blue-50' : ''}`}>
                <div className="bg-indigo-100 text-indigo-800 p-2 rounded-lg text-sm">
                  <div className="font-semibold">MATH 201</div>
                  <div className="text-xs">2:00-3:30 PM</div>
                  <div className="text-xs">Prof. Johnson</div>
                </div>
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Friday') ? 'bg-blue-50' : ''}`}></td>
            </tr>
            {/* 3:00 PM */}
            <tr>
              <td className="px-4 py-4 text-sm text-gray-500 font-medium">
                3:00
              </td>
              <td className={`px-4 py-4 ${isCurrentDay('Monday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Tuesday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Wednesday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Thursday') ? 'bg-blue-50' : ''}`}></td>
              <td className={`px-4 py-4 ${isCurrentDay('Friday') ? 'bg-blue-50' : ''}`}></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
    </div>
  );
};

export default WeeklyTimeTable;
