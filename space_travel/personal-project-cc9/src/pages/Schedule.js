import React from 'react';
import ScheduleSection from '../components/schedule/ScheduleSection';
import StepperBar from '../components/StepperBar';
import RoomAndService from './RoomAndService';

function Schedule() {
  return (
    // <div className="schedule w79 m0auto outline">
    <div className="schedule w84 m0auto dflex-col-center py2">
      <StepperBar />
      {/* <ScheduleSection /> */}
      <RoomAndService />
    </div>
  );
}

export default Schedule;
