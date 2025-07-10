import React, { useState, useEffect } from 'react';
import ProgressSteps from './ProgressSteps';
import CreditLimit from './CreditLimit';
import CourseSelection from './CourseSelection';
import ReviewAndConflicts from './ReviewAndConflicts';
import Confirmation from './Confirmation';
import MobileNavigation from './MobileNavigation'
import { fetchCourses } from '../../../Services/api';

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [conflicts, setConflicts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses on component mount
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const coursesData = await fetchCourses();
        
        // Transform the backend data to match frontend expectations
        const transformedCourses = coursesData.map(course => ({
          id: course.id,
          code: course.course_code,
          name: course.name,
          description: course.description,
          credits: course.credits,
          instructor: course.instructor.name,
          instructorId: course.instructor.id,
          category: course.category.name,
          categoryId: course.category.id,
          timeSlots: course.time_stamps.map(timeStamp => ({
            day: timeStamp.day,
            start: timeStamp.start_time,
            end: timeStamp.end_time
          })),
          // Create a readable schedule string
          schedule: course.time_stamps.map(ts => 
            `${ts.day} ${ts.start_time}-${ts.end_time}`
          ).join(', '),
          // Add some default values that might be needed
          enrolled: 0,
          capacity: 30,
          status: 'available'
        }));
        
        setAvailableCourses(transformedCourses);
        setError(null);
      } catch (error) {
        setError('Failed to load courses. Please try again.');
        console.error('Error loading courses:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  // Calculate total credits
  const totalCredits = selectedCourses.reduce((total, course) => total + course.credits, 0);

  // Select course function
  const selectCourse = (courseId) => {
    const course = availableCourses.find(c => c.id === courseId);
    if (!course || selectedCourses.some(selected => selected.id === courseId)) return;

    const courseWithStatus = {
      ...course,
      status: 'enrolled'
    };

    setSelectedCourses(prev => [...prev, courseWithStatus]);
  };

  // Remove course function
  const removeCourse = (courseId) => {
    setSelectedCourses(prev => prev.filter(course => course.id !== courseId));
  };

  // Navigation functions
  const goToStep = (step) => {
    setCurrentStep(step);
  };

  // Check if next step is available
  const canProceed = selectedCourses.length > 0 && totalCredits <= 18;

  // Confirm registration
  const confirmRegistration = () => {
    // Simulate registration process
    alert('Registration confirmed successfully! You will receive a confirmation email shortly.');
    // In a real app, you would make an API call and handle the response
    window.location.href = '/dashboard';
  };

  return (
    <main className="flex-1 p-6">
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="text-blue-600">Loading courses...</div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Main Content - only show when not loading */}
      {!loading && !error && (
        <>
          {/* Progress Steps */}
          <ProgressSteps currentStep={currentStep} />

          {/* Credit Limit */}
          <CreditLimit totalCredits={totalCredits} maxCredits={18} />

          {/* Step Content */}
          {currentStep === 1 && (
            <CourseSelection
              availableCourses={availableCourses}
              selectedCourses={selectedCourses}
              onSelectCourse={selectCourse}
              onRemoveCourse={removeCourse}
              canProceed={canProceed}
              onNext={() => goToStep(2)}
            />
          )}

          {currentStep === 2 && (
            <ReviewAndConflicts
              selectedCourses={selectedCourses}
              conflicts={conflicts}
              setConflicts={setConflicts}
              totalCredits={totalCredits}
              onBack={() => goToStep(1)}
              onNext={() => goToStep(3)}
            />
          )}

          {currentStep === 3 && (
            <Confirmation
              selectedCourses={selectedCourses}
              totalCredits={totalCredits}
              onBack={() => goToStep(2)}
              onConfirm={confirmRegistration}
            />
          )}
        </>
      )}
    </main>
  );
};

export default Registration;
