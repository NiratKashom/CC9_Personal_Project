import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ScheduleSection from '../components/schedule/ScheduleSection';
import StepperBar from '../components/StepperBar';
import BookingConfirm from './BookingConfirm';
import RoomAndService from './RoomAndService';
import Payment from './Payment';
import CompleteBooking from './CompleteBooking';
import { SummaryProvider } from '../contexts/summaryContext';
import { MockFlightProvider } from '../contexts/mockContext';
import { MOCK_FLIGHT } from '../temp/MOCK_SHCEDULE_FLIGTH';

function Schedule() {
  const { path } = useRouteMatch();

  const [flightData, setflightData] = useState(MOCK_FLIGHT);


  return (
    <div className="schedule w75 px2 m0auto dflex-col-center outline">
      <StepperBar />
      <MockFlightProvider>
        <SummaryProvider>
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
              <ScheduleSection flightData={flightData} />
            </Route>
          </Switch>
        </SummaryProvider>
      </MockFlightProvider>





    </div>
  );
}

export default Schedule;
