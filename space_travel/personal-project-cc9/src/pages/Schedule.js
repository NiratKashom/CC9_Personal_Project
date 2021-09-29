import React from 'react';
import ScheduleSection from '../components/schedule/ScheduleSection';
import StepperBar from '../components/schedule/StepperBar';
import RoomAndService from './RoomAndService';

function Schedule() {
  return (
    // <div className="schedule w79 m0auto outline">
    <div className="schedule w75 m0auto dflex-col-center py2 outline">
      <StepperBar />
      {/* <ScheduleSection /> */}
      <RoomAndService />
    </div>
  );
}

export default Schedule;
