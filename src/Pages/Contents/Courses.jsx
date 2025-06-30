import React, { useEffect, useState } from "react";
import CourseFilter from "./../Components/CourseFilter";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";
import { request } from "../../Services/api";
import CourseCard from "../Components/CourseCard";

const Courses = () => {
  const [searchTerm, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [instructor, setInstructor] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCourse = async (e) => {
    try {
      setLoading(true);
      const res = await request("courses", "GET", {
        search: searchTerm,
        category,
        instructor,
      });
      const data = await res.json();
      console.log("Courses data:", data);
      if (res.ok && data.status === true) {
        setCourses(data.courses);
        setLoading(false);
        // toast.success(data.message);
      } else if (data.status === false) {
        toast.error(data.message);
      } else {
        toast.error("Courses could not be fetched. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching courses.");
      console.error("Course fetch error:", error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [searchTerm, category, instructor]);

  return (
    <main className="flex-1 p-6">
      {/* <!-- Header --> */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Browse Courses
        </h2>
        <p className="text-gray-600">
          Find and register for courses for Spring 2024
        </p>
      </div>

      {/* <!-- Search and Filter Section --> */}
      <CourseFilter
        setSearch={setSearch}
        setCategory={setCategory}
        setInstructor={setInstructor}
        searchTerm={searchTerm}
        category={category}
        instructor={instructor}
      />

      {/* <!-- Course Cards Grid --> */}
      <div
        id="courseGrid"
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-12">
            <div className="loader border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
          </div>
        ) : courses.length === 0 ? (
          <div id="noResults" className="text-center py-12 col-span-full">
            <IoSearch className="w-8 h-8 mx-auto text-gray-400" />
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or clear the filters.
            </p>
          </div>
        ) : (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        )}
      </div>

      {/* <!-- No Results Message --> */}
      <div id="noResults" className="hidden text-center py-12">
        <IoSearch />
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          No courses found
        </h3>
        <p className="text-gray-500">
          Try adjusting your search criteria or clear the filters.
        </p>
      </div>
    </main>
  );
};

export default Courses;
