import React, { useState } from "react";

function ProgressBar({totalSteps=11,step, setStep}) {

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1); // Increment step
    }
  };

  const handleReset = () => {
    setStep(0); // Reset progress
  };

  return (
    <div className="flex flex-col w-full  items-center space-y-4">
      {/* Progress bar */}
      <div className="flex items-center ">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            {/* Dot */}
            <div
              className={`h-3 w-3 rounded-full ${
                index < step ? "bg-green-500" : "bg-gray-300"
              }`}
            />
            {/* Dashed line (only render if not the last dot) */}
            {index < totalSteps - 1 && (
              <div
                className={`h-1 w-5 ${
                  index < step - 1 ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Buttons */}

{/*       
      <div className="flex space-x-4">
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={step === totalSteps}
        >
          Next
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div> */}
    </div>
  );
}

export default ProgressBar;
