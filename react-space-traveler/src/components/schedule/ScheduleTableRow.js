import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function ScheduleTableRow() {
  const MOCK_SCHEDULE = {
    departureTime: new Date("09/04/2022 13:00:00"),
    arrivalTime: new Date("10/13/2022 10:00:00"),
    returnTime: new Date("11/20/2022 22:00:00"),
    departureLocation: 'earth',
    destinationLocation: 'moon',
    flightId: uuidv4(),
    startingPrice: 5000
  };

  const seperateDate = (dateObject, requirePart) => {
    // input: date object / requirePart('day','month','year')
    // output: string of date part
    const dateStr = dateObject.toDateString();
    let pickPart = '';
    if (requirePart === 'day') {
      pickPart = dateStr.split(' ')[2];
      if (pickPart.startsWith('0')) return pickPart.slice(1);
      return pickPart;
    }
    if (requirePart === 'month') return dateStr.split(' ')[1];
    if (requirePart === 'year') return dateStr.split(' ')[3];
  };

  console.log(MOCK_SCHEDULE);





  return (
    <div className="table-row txtcenter ttcap container-with-bg dflex-jbetween mb1">
      <div className="dflex flex4">
        <div className="flex1">
          <p className="fz25">1</p>
          <p className="fz125">sep</p>
          <p className="fz125">2022</p>
        </div>
        <div className="flex2">
          <p className="fz125">day 1</p>
          <p className="fz2">earth</p>
          <p className="fz125">1 sep 2022</p>
        </div>
        <p className="fz25 txtblue">{`->`}</p>
        <div className="flex2">
          <p className="fz125">day 1</p>
          <p className="fz2">moon</p>
          <p className="fz125">1 sep 2022</p>
        </div>
        <p className="fz25 txtgreen">{`->`}</p>
        <div className="flex2">
          <p className="fz125">day 1</p>
          <p className="fz2">earth</p>
          <p className="fz125">1 sep 2022</p>
        </div>
        <div className="flex1">
          <p className="fz25">20</p>
          <p className="fz125">sep</p>
          <p className="fz125">2022</p>
        </div>
      </div>
      <div className="flex1 container-with-bg p125 dflex-jcenter alignitmcenter">
        <p className="fz3">999999<span className="fz2 ">&#3647;</span></p>
      </div>
    </div>);
}

export default ScheduleTableRow;
