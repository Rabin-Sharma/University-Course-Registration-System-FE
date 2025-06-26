import React from "react";
import ScheduleSummary from "../Components/ScheduleSummary";
import WeeklyTimeTable from "../Components/WeeklyTimeTable";
import ConflictGanttChart from "../Components/ConflictGanttChart";
import EnrolledCourse from "../Components/EnrolledCourse";

const Schedule = () => {
  return (
    <main className="flex-1 p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">My Schedule</h2>
        <p className="text-gray-600">
          Your weekly class schedule for Spring 2024
        </p>
      </div>

      <ScheduleSummary />

      {/* Weekly Timetable */}
      <WeeklyTimeTable />

      {/* Gantt Chart Style Conflict Visualization */}
      {/* <ConflictGanttChart /> */}

      {/* Course Details List */}
      <EnrolledCourse />
    </main>
  );
};

export default Schedule;
