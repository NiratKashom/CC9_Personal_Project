import React, { useContext } from 'react';
import ContainerWithHeadline from '../components/ContainerWithHeadline';
import { useHistory } from 'react-router-dom';
import { summaryContext } from '../contexts/summaryContext';
import { flightContext } from '../contexts/flightContext';
import { userContext } from '../contexts/userContext';
import { separateDate, getFormattedDate } from '../services/dateService';

function BookingConfirm() {
  const history = useHistory();

  const { summary, sumPrice, hdlClickDecrStep,
    hdlClickIncrStep,
    setReserveInfoForSubmit
  } = useContext(summaryContext);
  const { currentFlight } = useContext(flightContext);
  const { user: {
    id,
    firstName,
    lastName,
    email }
  } = useContext(userContext);

  const hdlGoForward = () => {
    setReserveInfoForSubmit(cur => ({
      ...cur,
      passengerId: id,
      flightId: currentFlight.id,
      orderList: [...summary]
    })
    );
    hdlClickIncrStep();
    history.push(`/schedule-flight/payment`);
  };

  console.log(summary);


  const hdlClickBack = () => {
    hdlClickDecrStep();
    history.goBack();
  };

  const {
    departureDate,
    arrivalDate,
    returnDate,
    departure,
    destination,
    id: flightId,
  } = currentFlight;

  return (
    <div className="booking-confirm w45 mt125">
      <ContainerWithHeadline headline="booking confirmation">
        <div className="summary ">
          <div className="borderbot mb1 pb1 txtcenter ttcap dflex-jbetween">
            <div className="mr1">
              <p className="fz25">{separateDate(departureDate, 'day')}</p>
              <p className="fz125">{separateDate(departureDate, 'month')}</p>
              <p className="fz125">{separateDate(departureDate, 'year')}</p>
            </div>
            <div >
              <p className="fz125">day 1</p>
              <p className="fz2">{departure}</p>
              <p className="fz125">{getFormattedDate(departureDate)}</p>
            </div>
            <p className="fz25 txtblue">{`->`}</p>
            <div>
              <p className="fz125">day 1</p>
              <p className="fz2">{destination}</p>
              <p className="fz125">{getFormattedDate(arrivalDate)}</p>
            </div>
            <p className="fz25 txtgreen">{`->`}</p>
            <div>
              <p className="fz125">day 1</p>
              <p className="fz2">{departure}</p>
              <p className="fz125">{getFormattedDate(returnDate)}</p>
            </div>
            <div className="ml1">
              <p className="fz25">{separateDate(returnDate, 'day')}</p>
              <p className="fz125">{separateDate(returnDate, 'month')}</p>
              <p className="fz125">{separateDate(returnDate, 'year')}</p>
            </div>
          </div>

          <div className="borderbot mb1 pb1">
            <h2 className="fz125 mb05 ttup">Booking Info</h2>
            <div className="dflex-jbetween alistart">
              <div className="mr1">
                <div className="dflex-jbetween ">
                  <p className="ttcap txtwhite80">Booker name :</p>
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
              </div>
            </div>
          </div>

          <div className="borderbot mb1 pb1">
            <h2 className="fz125 mb05 ttup">Room</h2>
            {summary?.filter(item => item.type === 'room')
              .map((item, idx) => (
                <div key={idx} className="dflex-jbetween ">
                  <p className="ttcap">{`${item.amount} ${item.name} :`}</p>
                  <p className="fz125">{item.amount * item.price} &#3647;</p>
                </div>
              ))
            }
          </div>

          <div className="borderbot mb1 pb1">
            <h2 className="fz125 mb05 ttup">Extra Service</h2>
            {summary?.filter(item => item.type === 'extra')
              .map((item, idx) => (
                <div key={idx} className="dflex-jbetween ">
                  <p className="ttcap">{`${item.amount} ${item.name} :`}</p>
                  <p className="fz125">{item.amount * item.price} &#3647;</p>
                </div>
              ))
            }

          </div>

          <p className="fz125 txtend mb125">
            Total Trip:
            <span className="fz15" > {sumPrice} &#3647; </span>
          </p>
          <div className="dflex-jend">
            <button className="btn-orange fz15 p05 w15 mr15"
              onClick={hdlClickBack}
            >back</button>
            <button onClick={hdlGoForward} className="btn-green fz15 p05 w15 ml15">next</button>
          </div>
        </div>

      </ContainerWithHeadline >
    </div >
  );
}

export default BookingConfirm;
