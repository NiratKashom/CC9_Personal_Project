import React from 'react';
import ScheduleSection from '../components/schedule/ScheduleSection';
import StepperBar from '../components/StepperBar';
import BookingConfirm from './BookingConfirm';
import RoomAndService from './RoomAndService';
import Payment from './Payment';

function Schedule() {
  return (
    // <div className="schedule w79 m0auto outline">
    <div className="schedule w84 m0auto dflex-col-center py2">
      <StepperBar />
      {/* <ScheduleSection /> */}
      {/* <RoomAndService /> */}
      {/* <BookingConfirm /> */}
      <Payment />
    </div>
  );
}

export default Schedule;
