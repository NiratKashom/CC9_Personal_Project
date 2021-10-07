import React, { useState } from 'react';

function StepperBar() {
  const [step, setStep] = useState(0);

  const hdlClickIncr = () => setStep(step + 1);
  const hdlClickDecr = () => setStep(step - 1);


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
      <div>
        <p className="fz2">{step}</p>
        <button className="fz2 btn-outline-white mr1" onClick={hdlClickIncr}> + </button>
        <button className="fz2 btn-outline-white mr1" onClick={hdlClickDecr}> - </button>
      </div>
    </>
  );
}

export default StepperBar;
