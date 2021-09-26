import React from 'react';
import ScheduleFilterBar from '../components/schedule/ScheduleFilterBar';
import ScheduleTable from '../components/schedule/ScheduleTable';
import StepperBar from '../components/schedule/StepperBar';

function Schedule() {
  return (
    // <div className="schedule w79 m0auto outline">
    <div className="schedule w75 m0auto dflex-col-center outline py2">
      <StepperBar />
      <ScheduleFilterBar />
      <ScheduleTable />
    </div>
  );
}

export default Schedule;
