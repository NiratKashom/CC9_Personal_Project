import React, { useContext } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { separateDate, getFormattedDate } from '../../services/dateService';
import { summaryContext } from '../../contexts/summaryContext';
import { userContext } from '../../contexts/userContext';
import { serviceContext } from '../../contexts/serviceContext';

function ScheduleTableRow(props) {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { hdlClickIncrStep, hdlClickSetCurFlightWithId } = useContext(summaryContext);
  const { user } = useContext(userContext);
  const { serviceList } = useContext(serviceContext);

  const {
    departureDate,
    arrivalDate,
    returnDate,
    departure,
    destination,
    id: flightId,
    // roomPrice,
    // extraPrice
  } = props.data;

  let calcPrice = serviceList[0]?.price;
  switch (destination) {
    case 'mars':
      calcPrice = serviceList[0]?.price * 1.5;
      break;
    case 'jupiter':
      calcPrice = serviceList[0]?.price * 3;
      break;
    default:
      break;
  }

  const hdlClickToRoomById = () => {
    hdlClickIncrStep();
    hdlClickSetCurFlightWithId(flightId);
    history.push(`${path}/room/${flightId}`);
  };

  const hdlClickEditSchdById = () => {
    hdlClickSetCurFlightWithId(flightId);
    history.push(`${path}/manage-flight/${flightId}`);
  };

  return (
    <div onClick={user?.isAdmin ? hdlClickEditSchdById : hdlClickToRoomById} className="table-row txtcenter ttcap container-with-bg dflex-jbetween mb1">
      <div className="dflex flex4">
        <div className="flex1">
          <p className="fz25">{separateDate(departureDate, 'day')}</p>
          <p className="fz125">{separateDate(departureDate, 'month')}</p>
          <p className="fz125">{separateDate(departureDate, 'year')}</p>
        </div>
        <div className="flex2">
          <p className="fz125">day 1</p>
          <p className="fz2">{departure}</p>
          <p className="fz125">{getFormattedDate(departureDate)}</p>
        </div>
        <p className="fz25 txtblue">{`->`}</p>
        <div className="flex2">
          <p className="fz125">day 1</p>
          <p className="fz2">{destination}</p>
          <p className="fz125">{getFormattedDate(arrivalDate)}</p>
        </div>
        <p className="fz25 txtgreen">{`->`}</p>
        <div className="flex2">
          <p className="fz125">day 1</p>
          <p className="fz2">{departure}</p>
          <p className="fz125">{getFormattedDate(returnDate)}</p>
        </div>
        <div className="flex1">
          <p className="fz25">{separateDate(returnDate, 'day')}</p>
          <p className="fz125">{separateDate(returnDate, 'month')}</p>
          <p className="fz125">{separateDate(returnDate, 'year')}</p>
        </div>
      </div>
      <div className="flex1 container-with-bg p125 dflex-jcenter alignitmcenter">
        <p className="fz3">{calcPrice}<span className="fz2 ">&#3647;</span></p>
        {/* <p className="fz3">{roomPrice?.standard}<span className="fz2 ">&#3647;</span></p> */}
      </div>
    </div>);
}

export default ScheduleTableRow;
