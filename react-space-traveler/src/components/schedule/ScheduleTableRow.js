import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { separateDate, getFormattedDate } from '../../services/dateService';

function ScheduleTableRow() {
  const MOCK_SCHEDULE = {
    departureDate: new Date("09/04/2022 13:00:00"),
    arrivalDate: new Date("10/13/2022 10:00:00"),
    returnDate: new Date("11/20/2022 22:00:00"),
    departureLocation: 'earth',
    destinationLocation: 'moon',
    flightId: uuidv4(),
    startingPrice: 5000
  };

  const {
    departureDate,
    arrivalDate,
    returnDate,
    departureLocation,
    destinationLocation,
    flightId,
    startingPrice
  } = MOCK_SCHEDULE;


  return (
    <div className="table-row txtcenter ttcap container-with-bg dflex-jbetween mb1">
      <div className="dflex flex4">
        <div className="flex1">
          <p className="fz25">{separateDate(departureDate, 'day')}</p>
          <p className="fz125">{separateDate(departureDate, 'month')}</p>
          <p className="fz125">{separateDate(departureDate, 'year')}</p>
        </div>
        <div className="flex2">
          <p className="fz125">day 1</p>
          <p className="fz2">{departureLocation}</p>
          <p className="fz125">{getFormattedDate(departureDate)}</p>
        </div>
        <p className="fz25 txtblue">{`->`}</p>
        <div className="flex2">
          <p className="fz125">day 1</p>
          <p className="fz2">{destinationLocation}</p>
          <p className="fz125">{getFormattedDate(arrivalDate)}</p>
        </div>
        <p className="fz25 txtgreen">{`->`}</p>
        <div className="flex2">
          <p className="fz125">day 1</p>
          <p className="fz2">{departureLocation}</p>
          <p className="fz125">{getFormattedDate(returnDate)}</p>
        </div>
        <div className="flex1">
          <p className="fz25">{separateDate(returnDate, 'day')}</p>
          <p className="fz125">{separateDate(returnDate, 'month')}</p>
          <p className="fz125">{separateDate(returnDate, 'year')}</p>
        </div>
      </div>
      <div className="flex1 container-with-bg p125 dflex-jcenter alignitmcenter">
        <p className="fz3">{startingPrice}<span className="fz2 ">&#3647;</span></p>
      </div>
    </div>);
}

export default ScheduleTableRow;
