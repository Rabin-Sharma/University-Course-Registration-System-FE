import React, { useState } from "react";
import SelectableCourseCard from "./SelectableCourseCard";
import CourseFilter from "../CourseFilter";

const CourseSelection = ({
  availableCourses,
  selectedCourses,
  onSelectCourse,
  onRemoveCourse,
  canProceed,
  onNext,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [instructor, setInstructor] = useState("");

  const filteredCourses = availableCourses.filter((course) => {
    const matchesSearch =
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || course.categoryId == selectedCategory;
    const matchesInstructor = !instructor || course.instructorId == instructor;

    return matchesSearch && matchesCategory && matchesInstructor;
  });

  return (
    <div>
      {/* Available Courses */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Available Courses
        </h3>

        <CourseFilter
          setSearch={setSearchTerm}
          setCategory={setSelectedCategory}
          setInstructor={setInstructor}
          searchTerm={searchTerm}
          category={selectedCategory}
          instructor={instructor}
        />

        {/* Available Courses List */}
        <div className="space-y-4">
          {filteredCourses.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No courses found matching your criteria
            </p>
          ) : (
            filteredCourses.map((course) => (
              <SelectableCourseCard
                key={course.id}
                course={course}
                isSelected={selectedCourses.some(
                  (selected) => selected.id === course.id
                )}
                showSelectButton={true}
                onSelectCourse={onSelectCourse}
                onRemoveCourse={onRemoveCourse}
              />
            ))
          )}
        </div>
      </div>

      {/* Selected Courses */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Selected Courses
        </h3>
        <div className="space-y-4">
          {selectedCourses.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No courses selected yet
            </p>
          ) : (
            selectedCourses.map((course) => (
              <SelectableCourseCard
                key={course.id}
                course={course}
                isSelected={false}
                showSelectButton={false}
                showRemoveButton={true}
                onSelectCourse={onSelectCourse}
                onRemoveCourse={onRemoveCourse}
              />
            ))
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next: Review Conflicts
        </button>
      </div>
    </div>
  );
};

export default CourseSelection;
