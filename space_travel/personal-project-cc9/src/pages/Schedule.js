import React from 'react';
import ScheduleSection from '../components/schedule/ScheduleSection';
import StepperBar from '../components/schedule/StepperBar';

function Schedule() {
  return (
    // <div className="schedule w79 m0auto outline">
    <div className="schedule w75 m0auto dflex-col-center py2">
      <StepperBar />
      <ScheduleSection />
    </div>
  );
}

export default Schedule;
