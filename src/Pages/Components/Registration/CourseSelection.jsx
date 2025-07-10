import React, { useState } from "react";
import SelectableCourseCard from "./SelectableCourseCard";

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

  const filteredCourses = availableCourses.filter((course) => {
    const matchesSearch =
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  return (
    <div>
      {/* Available Courses */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Available Courses
        </h3>

        {/* Search and Filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search courses..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Engineering">Engineering</option>
            </select>
          </div>
          <div>
            <button
              onClick={clearFilters}
              className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              Clear Filters
            </button>
          </div>
        </div>

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
