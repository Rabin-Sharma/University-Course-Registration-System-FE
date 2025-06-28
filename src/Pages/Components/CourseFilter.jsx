import React, { useEffect, useState } from "react";
import { request } from "../../Services/api";
import toast from "react-hot-toast";

const CourseFilter = ({
  setSearch,
  setCategory,
  setInstructor,
  searchTerm,
  category,
  instructor,
}) => {
  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setInstructor("");
  };
  const [categories, setCategories] = useState([]);

  const fetchCategory = async (e) => {
    try {
      const res = await request("categories", "GET", {
        searchTerm,
        category,
        instructor,
      });
      const data = await res.json();
      console.log("Category data:", data);
      if (res.ok && data.status === true) {
        setCategories(data.categories);
        toast.success(data.message);
      } else if (data.status === false) {
        toast.error(data.message);
      } else {
        toast.error("Categories could not be fetched. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching categories.");
      console.error("Category fetch error:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [searchTerm, category, instructor]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* <!-- Search by Name --> */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Course
          </label>
          <input
            type="text"
            id="searchInput"
            onChange={(e) => setSearch(e.target.value)}
            value={searchTerm}
            placeholder="Course name or code..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* <!-- Filter by Category --> */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="categoryFilter"
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* <!-- Filter by Instructor --> */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Instructor
          </label>
          <select
            id="instructorFilter"
            onChange={(e) => setInstructor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Instructors</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Prof. Johnson">Prof. Johnson</option>
            <option value="Dr. Williams">Dr. Williams</option>
            <option value="Prof. Brown">Prof. Brown</option>
          </select>
        </div>

        {/* <!-- Clear Filters --> */}
        <div className="flex items-end">
          <button
            onClick={clearFilters}
            id="clearFilters"
            className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;
