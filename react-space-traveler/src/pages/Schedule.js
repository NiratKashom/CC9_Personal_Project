import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ScheduleSection from '../components/schedule/ScheduleSection';
import StepperBar from '../components/StepperBar';
import BookingConfirm from './BookingConfirm';
import RoomAndService from './RoomAndService';
import Payment from './Payment';
import CompleteBooking from './CompleteBooking';

function Schedule() {
  const { path, url } = useRouteMatch();
  return (
    <div className="schedule w75 px2 m0auto dflex-col-center outline">
      <StepperBar />

      <Switch>

        <Route path={`${path}/complete`}>
          <CompleteBooking />
        </Route>

        <Route path={`${path}/payment`}>
          <Payment />
        </Route>


        <Route path={`${path}/confirm`}>
          <BookingConfirm />
        </Route>

        <Route path={`${path}/room`}>
          <RoomAndService />
        </Route>

        <Route path={`${path}`}>
          <ScheduleSection />
        </Route>



      </Switch>
      {/* <Switch>
        <Route path="/schedule-flight/info">
          <BookingConfirm />
        </Route>
      </Switch>
      <CompleteBooking /> */}
    </div>
  );
}

export default Schedule;
