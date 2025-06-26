import React, { useState } from 'react';

const CourseSelection = ({ 
  availableCourses, 
  selectedCourses, 
  onSelectCourse, 
  onRemoveCourse, 
  canProceed, 
  onNext 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredCourses = availableCourses.filter(course => {
    const matchesSearch = course.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  const getCreditBadgeColor = (credits) => {
    switch(credits) {
      case 2: return 'bg-orange-100 text-orange-800';
      case 3: return 'bg-blue-100 text-blue-800';
      case 4: return 'bg-green-100 text-green-800';
      default: return 'bg-purple-100 text-purple-800';
    }
  };

  const renderCourseCard = (course, isSelected = false, showSelectButton = false, showRemoveButton = false) => {
    const isFull = course.enrolled >= course.capacity;

    return (
      <div key={course.id} className={`flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200 ${isSelected && !showSelectButton ? 'bg-blue-50' : ''}`}>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold text-gray-800">{course.code}</h4>
              <p className="text-gray-600">{course.name}</p>
            </div>
            <div className="text-right">
              <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getCreditBadgeColor(course.credits)}`}>
                {course.credits} Credits
              </span>
              {isFull && !showRemoveButton && (
                <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded ml-2">
                  Full
                </span>
              )}
              {course.status === 'waitlist' && (
                <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded ml-2">
                  Waitlist
                </span>
              )}
              {course.status === 'enrolled' && !showSelectButton && (
                <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded ml-2">
                  Enrolled
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              {course.instructor}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {course.schedule}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              {course.category}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              {course.enrolled}/{course.capacity}
            </div>
          </div>
        </div>
        <div className="ml-4">
          {showSelectButton && (
            isSelected ? (
              <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed" disabled>
                Selected
              </button>
            ) : (
              <button 
                onClick={() => onSelectCourse(course.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                {isFull ? 'Join Waitlist' : 'Select'}
              </button>
            )
          )}
          {showRemoveButton && (
            <button 
              onClick={() => onRemoveCourse(course.id)}
              className="text-red-600 hover:text-red-800 transition duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Available Courses */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Courses</h3>
        
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
            filteredCourses.map(course => 
              renderCourseCard(
                course, 
                selectedCourses.some(selected => selected.id === course.id),
                true
              )
            )
          )}
        </div>
      </div>

      {/* Selected Courses */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Selected Courses</h3>
        <div className="space-y-4">
          {selectedCourses.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No courses selected yet</p>
          ) : (
            selectedCourses.map(course => 
              renderCourseCard(course, false, false, true)
            )
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
