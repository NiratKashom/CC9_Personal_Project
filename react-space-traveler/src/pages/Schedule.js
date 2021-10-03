import React from 'react';
import ScheduleSection from '../components/schedule/ScheduleSection';
import StepperBar from '../components/StepperBar';
import BookingConfirm from './BookingConfirm';
import RoomAndService from './RoomAndService';
import Payment from './Payment';
import CompleteBooking from './CompleteBooking';

function Schedule() {
  return (
    // <div className="schedule w79 m0auto outline">
    <div className="schedule w75 px2 m0auto dflex-col-center outline">
      <StepperBar />
      <ScheduleSection />
      {/* <RoomAndService /> */}
      {/* <BookingConfirm /> */}
      {/* <Payment /> */}
      {/* <CompleteBooking /> */}
    </div>
  );
}

export default Schedule;
