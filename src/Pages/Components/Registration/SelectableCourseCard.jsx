import React from 'react';

const SelectableCourseCard = ({ 
  course, 
  isSelected = false, 
  showSelectButton = false, 
  showRemoveButton = false,
  onSelectCourse,
  onRemoveCourse 
}) => {
  const getCreditBadgeColor = (credits) => {
    switch(credits) {
      case 2: return 'bg-orange-100 text-orange-800';
      case 3: return 'bg-blue-100 text-blue-800';
      case 4: return 'bg-green-100 text-green-800';
      default: return 'bg-purple-100 text-purple-800';
    }
  };

  const isFull = course.enrolled >= course.capacity;

  return (
    <div 
      className={`flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200 ${isSelected && !showSelectButton ? 'bg-blue-50' : ''}`}
    >
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

export default SelectableCourseCard;
