import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  IoArrowBack,
  IoCalendar,
  IoTime,
  IoPerson,
  IoBook,
  IoDocument,
  IoSchool,
} from "react-icons/io5";
import toast from "react-hot-toast";
import { fetchCourseDetails } from "../../Services/api";
import { getStorageUrl } from "../../config/constants";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCourseDetails = async () => {
    try {
      setLoading(true);
      const courseData = await fetchCourseDetails(id);
      setCourse(courseData);
    } catch (error) {
      toast.error("Failed to fetch course details");
      console.error("Error fetching course details:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      getCourseDetails();
    }
  }, [id]);

  const formatTime = (time) => {
    return new Date(`1970-01-01T${time}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const groupTimeStampsByDay = (timeStamps) => {
    const grouped = {};
    timeStamps.forEach((stamp) => {
      if (!grouped[stamp.day]) {
        grouped[stamp.day] = [];
      }
      grouped[stamp.day].push(stamp);
    });
    return grouped;
  };

  if (loading) {
    return (
      <main className="flex-1 p-6">
        <div className="flex justify-center items-center py-12">
          <div className="loader border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
        </div>
      </main>
    );
  }

  if (!course) {
    return (
      <main className="flex-1 p-6">
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Course not found
          </h3>
          <p className="text-gray-500 mb-4">
            The course you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Courses
          </button>
        </div>
      </main>
    );
  }

  const groupedTimeStamps = groupTimeStampsByDay(course.time_stamps || []);

  return (
    <main className="flex-1 p-6">
      {/* Header with Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate("/courses")}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
        >
          <IoArrowBack className="w-5 h-5 mr-2" />
          Back to Courses
        </button>
        <h2 className="text-3xl font-bold text-gray-800">Course Details</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Course Information */}
        <div className="lg:col-span-2">
          {/* Course Header Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              {course.image && (
                <div className="flex-shrink-0">
                  <img
                    src={getStorageUrl(course.image)}
                    alt={course.name}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {course.course_code}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {course.credits} Credits
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-3">
                  {course.name}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center mt-4 text-gray-600">
                  <IoTime className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    Duration: {course.time_description}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Schedule */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <IoCalendar className="w-5 h-5 mr-2" />
              Class Schedule
            </h3>
            {Object.keys(groupedTimeStamps).length > 0 ? (
              <div className="space-y-3">
                {Object.entries(groupedTimeStamps).map(([day, stamps]) => (
                  <div key={day} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-800">{day}</h4>
                    <div className="space-y-1">
                      {stamps.map((stamp) => (
                        <p key={stamp.id} className="text-gray-600 text-sm">
                          {formatTime(stamp.start_time)} -{" "}
                          {formatTime(stamp.end_time)}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No schedule available</p>
            )}
          </div>

          {/* Syllabus Section */}
          {course.syllabus && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <IoDocument className="w-5 h-5 mr-2" />
                Course Syllabus
              </h3>
              <a
                href={getStorageUrl(course.syllabus)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <IoDocument className="w-4 h-4 mr-2" />
                Download Syllabus (PDF)
              </a>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Instructor Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <IoPerson className="w-5 h-5 mr-2" />
              Instructor
            </h3>
            <div className="text-center">
              {course.instructor.image && (
                <img
                  src={getStorageUrl(course.instructor.image)}
                  alt={course.instructor.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
              )}
              <h4 className="font-medium text-gray-800 mb-1">
                {course.instructor.name}
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                {course.instructor.email}
              </p>
              {course.instructor.phone && (
                <p className="text-gray-600 text-sm mb-2">
                  {course.instructor.phone}
                </p>
              )}
              {course.instructor.address && (
                <p className="text-gray-500 text-xs">
                  {course.instructor.address}
                </p>
              )}
            </div>
          </div>

          {/* Category Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <IoSchool className="w-5 h-5 mr-2" />
              Category
            </h3>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                {course.category.name}
              </h4>
              <p className="text-gray-600 text-sm">
                {course.category.description}
              </p>
            </div>
          </div>

          {/* Course Info Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <IoBook className="w-5 h-5 mr-2" />
              Course Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Course Code:</span>
                <span className="font-medium">{course.course_code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Credits:</span>
                <span className="font-medium">{course.credits}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{course.time_description}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-medium">{course.category.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseDetail;
