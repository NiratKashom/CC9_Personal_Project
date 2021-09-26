import React from 'react';

function StepperBar() {
  return (
    <div class="stepper-wrapper my15">
      <div class="stepper-item active">
        <div class="step-counter"></div>
        <div class="step-name">selecet flight</div>
      </div>
      <div class="stepper-item">
        <div class="step-counter"></div>
        <div class="step-name">room and service</div>
      </div>
      <div class="stepper-item">
        <div class="step-counter"></div>
        <div class="step-name">confirmation</div>
      </div>
      <div class="stepper-item">
        <div class="step-counter"></div>
        <div class="step-name">payment</div>
      </div>
    </div>
  );
}

export default StepperBar;
