import React, { useEffect, useState } from "react";
import ScheduleSummary from "../Components/ScheduleSummary";
import WeeklyTimeTable from "../Components/WeeklyTimeTable";
import EnrolledCourse from "../Components/EnrolledCourse";
import { fetchEnrolledCourses } from "../../Services/api";
import { coursesData } from './../../data/coursesData';

const Schedule = () => {
  const [courses, setCourses] = useState([]);
  const [coursesData, setCoursesData] = useState();
  const [loading, setLoading] = useState(true);
  const getEnrolledCourses = async () => {
    try {
      const courseData = await fetchEnrolledCourses();
      setCourses(courseData.courses);
      setCoursesData(courseData);
    } catch (error) {
      toast.error("Failed to fetch enrolled courses. Please try again.");
      console.error("Error fetching enrolled courses:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getEnrolledCourses();
  });
  return (
    <main className="flex-1 p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">My Schedule</h2>
        <p className="text-gray-600">
          Your weekly class schedule for Spring 2024
        </p>
      </div>

      <ScheduleSummary isLoading={loading} courses={coursesData} />

      {/* Weekly Timetable */}
      <WeeklyTimeTable />

      {/* Gantt Chart Style Conflict Visualization */}
      {/* <ConflictGanttChart /> */}

      {/* Course Details List */}
      <EnrolledCourse courses={courses} loading={loading} />
    </main>
  );
};

export default Schedule;
