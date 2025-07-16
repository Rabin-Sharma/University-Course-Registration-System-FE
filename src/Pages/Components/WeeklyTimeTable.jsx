import React, { useEffect, useState } from "react";
import { fetchRoutine } from "../../Services/api";

const WeeklyTimeTable = () => {
  const [routine, setRoutine] = useState([]);
  const [loading, setLoading] = useState(true);
  const getRoutine = async () => {
    try {
      setLoading(true);
      const routines = await fetchRoutine();
      setRoutine(routines);
    } catch (error) {
      console.error("Error fetching routine:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRoutine();
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Get current day of the week
  const getCurrentDay = () => {
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

              {days.map((day, index) => (
                <th
                  key={index}
                  className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    isCurrentDay(day) ? "bg-blue-50" : ""
                  }`}
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              // Loading skeleton row
              <tr key="loading">
                <td className="px-4 py-4 text-sm text-gray-500 font-medium">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-12"></div>
                </td>
                {days.map((day, dayIndex) => (
                  <td
                    key={dayIndex}
                    className={`px-4 py-4 ${isCurrentDay(day) ? "bg-blue-50" : ""}`}
                  >
                      <div className="bg-gray-100 p-2 rounded-lg animate-pulse">
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded mb-1 w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                  </td>
                ))}
              </tr>
            ) : routine.length === 0 ? (
              // No data state
              <tr>
                <td colSpan="8" className="px-4 py-12 text-center text-gray-500">
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="text-lg font-medium text-gray-500 mb-2">No timetable available</p>
                    <p className="text-sm text-gray-400">Your schedule will appear here once courses are assigned</p>
                  </div>
                </td>
              </tr>
            ) : (
              // Actual data - only show time rows that have at least one course
              Object.entries(routine)
                .filter(([hour, dayData]) => {
                  // Check if any day in this hour has a course
                  return Object.values(dayData).some(course => course && !Array.isArray(course));
                })
                .map(([hour, dayData]) => (
                <tr key={hour}>
                  <td className="px-4 py-4 text-sm text-gray-500 font-medium"> {hour}:00 </td>
                  {Object.entries(dayData).map(([day, course], index) => (
                    <td key={index} className={`px-4 py-4 ${ isCurrentDay(day) ? "bg-blue-50" : "" }`} >

                      {course && !Array.isArray(course) ? (
                        <div className="bg-indigo-100 text-indigo-800 p-2 rounded-lg text-sm">
                          <div className="font-semibold"> {course.course_code}</div>
                          <div className="text-xs">{course.start_time} - {course.end_time}</div>
                          <div className="text-xs">{course.instructor}</div>
                        </div>

                      ) : (

                        <div className="text-gray-300 text-sm text-center"> — </div> // or empty cell

                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
    </div>
  );
};

export default WeeklyTimeTable;
