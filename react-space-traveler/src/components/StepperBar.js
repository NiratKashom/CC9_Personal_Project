import React, { useContext } from 'react';
import { summaryContext } from '../contexts/summaryContext';


function StepperBar() {
  const { step } = useContext(summaryContext);

  return (
    <>
      <div className="stepper-wrapper mt125">
        <div className={`stepper-item ${step === 0 ? 'active' : ''} ${step >= 1 ? 'complete' : ''}`} >
          <div className="step-counter"></div>
          <div className="step-name">selecet flight</div>
        </div>
        <div className={`stepper-item ${step === 1 ? 'active' : ''} ${step >= 2 ? 'complete' : ''}`}>
          <div className="step-counter"></div>
          <div className="step-name">room and service</div>
        </div>
        <div className={`stepper-item ${step === 2 ? 'active' : ''} ${step >= 3 ? 'complete' : ''}`}>
          <div className="step-counter"></div>
          <div className="step-name">confirmation</div>
        </div>
        <div className={`stepper-item ${step === 3 ? 'active' : ''} ${step >= 4 ? 'complete' : ''}`}>
          <div className="step-counter"></div>
          <div className="step-name">payment</div>
        </div>
      </div>
    </>
  );
}

export default StepperBar;
