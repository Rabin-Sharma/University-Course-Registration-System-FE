import React from 'react';

const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { id: 1, title: 'Select Courses', subtitle: 'Choose your courses' },
    { id: 2, title: 'Review & Conflicts', subtitle: 'Check for conflicts' },
    { id: 3, title: 'Confirmation', subtitle: 'Finalize registration' }
  ];

  const getStepIndicatorClass = (stepId) => {
    if (stepId < currentStep) {
      return 'flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full font-semibold';
    } else if (stepId === currentStep) {
      return 'flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-semibold';
    } else {
      return 'flex items-center justify-center w-10 h-10 bg-gray-300 text-gray-600 rounded-full font-semibold';
    }
  };

  const getProgressBarClass = (stepId) => {
    if (stepId < currentStep) {
      return 'h-1 bg-green-600 rounded-full w-full transition-all duration-300';
    } else if (stepId === currentStep) {
      return 'h-1 bg-blue-600 rounded-full w-1/2 transition-all duration-300';
    } else {
      return 'h-1 bg-gray-200 rounded-full w-0 transition-all duration-300';
    }
  };

  const getTitleClass = (stepId) => {
    if (stepId <= currentStep) {
      return 'text-sm font-medium text-gray-900';
    } else {
      return 'text-sm font-medium text-gray-500';
    }
  };

  const getSubtitleClass = (stepId) => {
    if (stepId <= currentStep) {
      return 'text-sm text-gray-500';
    } else {
      return 'text-sm text-gray-400';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex items-center">
              <div className={getStepIndicatorClass(step.id)}>
                {step.id}
              </div>
              <div className="ml-4">
                <h3 className={getTitleClass(step.id)}>{step.title}</h3>
                <p className={getSubtitleClass(step.id)}>{step.subtitle}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div className={getProgressBarClass(step.id)}></div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
