import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ModalWithCloseBtn from '../ModalWithCloseBtn';
import { reservationContext } from '../../contexts/reservationContext';
import { userContext } from '../../contexts/userContext';
import { separateDate, getFormattedDate } from '../../services/dateService';


function UserReverseInfo() {
  const { curReservation, hdlChangeEditFlight, displayStatus } = useContext(reservationContext);
  const { user } = useContext(userContext);

  const
    {
      id: reserveId,
      status,
      flightId,
      flight: {
        departureDate,
        arrivalDate,
        returnDate,
        departure,
        destination,
      },
      passenger: {
        firstName,
        lastName,
        email
      },
      orderList,
    } = curReservation;



  const sumPrice = orderList.reduce((acc, item) => {
    return acc += item.price * item.amount;
  }, 0);

  const hdlclickUpdateStatus = (stat) => {
    hdlChangeEditFlight(stat);
  };

  return (
    <div className="modal-backdrop center">
      <ModalWithCloseBtn headline="reservation infomation"
        addClass=""
      >
        <div className="borderbot mb1 pb1">
          <div className="dflex-jbetween">
            <div className="dflex-col-center mr15 ttcap">


              <p className="fz25">{separateDate(departureDate, 'day')}</p>
              <p className="fz125">{separateDate(departureDate, 'month')}</p>
              <p className="fz125">{separateDate(departureDate, 'year')}</p>

            </div>
            <div className="dflex-col-center ttcap">
              <p className="fz125">day 1</p>
              <p className="fz2">{departure}</p>
              <p className="fz125">{getFormattedDate(departureDate)}</p>

            </div>
            <p className="fz25 txtblue">{`->`}</p>
            <div className=" dflex-col-center ttcap">
              <p className="fz125">day 1</p>
              <p className="fz2">{destination}</p>
              <p className="fz125">{getFormattedDate(arrivalDate)}</p>

            </div>
            <p className="fz25 txtgreen">{`->`}</p>
            <div className="dflex-col-center ttcap">
              <p className="fz125">day 1</p>
              <p className="fz2">{departure}</p>
              <p className="fz125">{getFormattedDate(returnDate)}</p>

            </div>
            <div className="dflex-col-center ml15 ttcap" >
              <p className="fz25">{separateDate(returnDate, 'day')}</p>
              <p className="fz125">{separateDate(returnDate, 'month')}</p>
              <p className="fz125">{separateDate(returnDate, 'year')}</p>

            </div>
          </div>
        </div>

        <div className="borderbot mb1 pb1">
          <h2 className="fz125 mb05 ttup">Booking Info</h2>
          <div className="dflex-jbetween">
            <div >
              <div className="dflex-jbetween ">
                <p className="ttcap txtwhite80">Booker name : </p>
                <p className="ml05 txtend ttcap fz125">{`${firstName} ${lastName}`}</p>
              </div>
              <div className="dflex-jbetween">
                <p className="ttcap txtwhite80">email address: </p>
                <p className="ml05 txtend fz125">{email}</p>
              </div>
            </div>

            <div>
              <div className="dflex-jbetween">
                <p className="ttcap txtwhite80">flight id: </p>
                <p className="ml05 txtend fz125">{flightId}</p>
              </div>
              <div className="dflex-jbetween">
                <p className="ttcap txtwhite80">booking id: </p>
                <p className="ml05 txtend fz125">{reserveId}</p>
              </div>
            </div>
          </div>
        </div>


        <div className="borderbot mb1 pb1">
          <h2 className="fz125 mb05 ttup">Room</h2>
          {orderList?.filter(item => item.Service.serviceType === 'room')
            .map((item, idx) => (
              <div key={idx} className="dflex-jbetween ">
                <p className="ttcap">{`${item.amount} ${item.Service.name} :`}</p>
                <p className="fz125">{item.amount * item.price} &#3647;</p>
              </div>
            ))
          }

        </div>

        <div className="borderbot mb1 pb1">
          <h2 className="fz125 mb05 ttup">extra</h2>
          {orderList?.filter(item => item.Service.serviceType === 'extra')
            .map((item, idx) => (
              <div key={idx} className="dflex-jbetween ">
                <p className="ttcap">{`${item.amount} ${item.Service.name} :`}</p>
                <p className="fz125">{item.amount * item.price} &#3647;</p>
              </div>
            ))
          }
        </div>

        <p className="fz125 txtend mb125">
          Total Trip:
          <span className="fz15" > {sumPrice} &#3647; </span>
        </p>
        <div className="dflex-jbetween">
          <p className="fz15 ttup ">
            status :
            <span className={`fz15 ml05 ${displayStatus(status)}`}>{status}</span>
          </p>
          {user.isAdmin ?
            <div>
              <button className="btn-outline-red fz125 mr1"
                onClick={() => hdlclickUpdateStatus('rejected')}
              >reject</button>
              <button className="btn-green fz125"
                onClick={() => hdlclickUpdateStatus('approved')}
              >approve</button>
            </div>
            : status !== 'rejected' ?
              <Link to={`/user-manage/UserCancelReserve`}>
                <button className="btn-outline-red fz125 ml1">cancel a reservation</button>
              </Link> : null
          }
        </div>

      </ModalWithCloseBtn>
    </div>
  );
}

export default UserReverseInfo;
