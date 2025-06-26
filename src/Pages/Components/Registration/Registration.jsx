import React, { useState, useEffect } from 'react';
import TopNavigation from './TopNavigation';
import Sidebar from './Sidebar';
import Header from './Header';
import ProgressSteps from './ProgressSteps';
import CreditLimit from './CreditLimit';
import CourseSelection from './CourseSelection';
import ReviewAndConflicts from './ReviewAndConflicts';
import Confirmation from './Confirmation';
import MobileNavigation from './MobileNavigation';
import { coursesData } from '../data/coursesData';

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [conflicts, setConflicts] = useState([]);
  const [waitlistCourses, setWaitlistCourses] = useState([]);

  // Calculate total credits
  const totalCredits = selectedCourses.reduce((total, course) => total + course.credits, 0);

  // Detect schedule conflicts
  const detectConflicts = () => {
    const newConflicts = [];
    
    for (let i = 0; i < selectedCourses.length; i++) {
      for (let j = i + 1; j < selectedCourses.length; j++) {
        const course1 = selectedCourses[i];
        const course2 = selectedCourses[j];
        
        const hasConflict = course1.timeSlots.some(slot1 => 
          course2.timeSlots.some(slot2 => 
            slot1.day === slot2.day && timesOverlap(slot1, slot2)
          )
        );
        
        if (hasConflict) {
          newConflicts.push({
            course1: course1,
            course2: course2,
            type: 'time'
          });
        }
      }
    }
    
    setConflicts(newConflicts);
  };

  // Check if times overlap
  const timesOverlap = (slot1, slot2) => {
    const start1 = timeToMinutes(slot1.start);
    const end1 = timeToMinutes(slot1.end);
    const start2 = timeToMinutes(slot2.start);
    const end2 = timeToMinutes(slot2.end);
    
    return (start1 < end2 && start2 < end1);
  };

  // Convert time to minutes
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // Select course function
  const selectCourse = (courseId) => {
    const course = coursesData.find(c => c.id === courseId);
    if (!course || selectedCourses.some(selected => selected.id === courseId)) return;

    const isFull = course.enrolled >= course.capacity;
    const courseWithStatus = {
      ...course,
      status: isFull ? 'waitlist' : 'enrolled'
    };

    setSelectedCourses(prev => [...prev, courseWithStatus]);
    
    if (isFull) {
      setWaitlistCourses(prev => [...prev, courseWithStatus]);
    }
  };

  // Remove course function
  const removeCourse = (courseId) => {
    setSelectedCourses(prev => prev.filter(course => course.id !== courseId));
    setWaitlistCourses(prev => prev.filter(course => course.id !== courseId));
  };

  // Navigation functions
  const goToStep = (step) => {
    if (step === 2) {
      detectConflicts();
    }
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
    <div className="bg-gray-50 min-h-screen">
      <TopNavigation />
      
      <div className="flex">
        <Sidebar currentPage="registration" />
        
        <main className="flex-1 p-6">
          {/* Header */}
          <Header />

          {/* Progress Steps */}
          <ProgressSteps currentStep={currentStep} />

          {/* Credit Limit */}
          <CreditLimit totalCredits={totalCredits} maxCredits={18} />

          {/* Step Content */}
          {currentStep === 1 && (
            <CourseSelection
              availableCourses={coursesData}
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
              waitlistCourses={waitlistCourses}
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
        </main>
      </div>

      <MobileNavigation currentPage="registration" />
    </div>
  );
};

export default Registration;
