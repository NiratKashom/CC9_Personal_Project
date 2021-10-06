import React from 'react';

function StepperBar() {
  return (
    <div className="stepper-wrapper mt125">
      <div className="stepper-item active">
        <div className="step-counter"></div>
        <div className="step-name">selecet flight</div>
      </div>
      <div className="stepper-item">
        <div className="step-counter"></div>
        <div className="step-name">room and service</div>
      </div>
      <div className="stepper-item">
        <div className="step-counter"></div>
        <div className="step-name">confirmation</div>
      </div>
      <div className="stepper-item">
        <div className="step-counter"></div>
        <div className="step-name">payment</div>
      </div>
    </div>
  );
}

export default StepperBar;
