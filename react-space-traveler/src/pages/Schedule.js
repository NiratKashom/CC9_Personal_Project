import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ScheduleSection from '../components/schedule/ScheduleSection';
import StepperBar from '../components/StepperBar';
import BookingConfirm from './BookingConfirm';
import RoomAndService from './RoomAndService';
import Payment from './Payment';

function Schedule() {
  const { path } = useRouteMatch();

  return (
    <div className="schedule w75 px2 m0auto dflex-col-center">

      <StepperBar />
      <Switch>

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

    </div>
  );
}

export default Schedule;
