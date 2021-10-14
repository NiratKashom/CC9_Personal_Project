import React, { useContext, useState } from 'react';
import ModalWithCloseBtn from '../ModalWithCloseBtn';
import { reservationContext } from '../../contexts/reservationContext';
import { userContext } from '../../contexts/userContext';
import { separateDate, getFormattedDate } from '../../services/dateService';


function UserReverseInfo() {
  const { curReservation, hdlChangeStatReserve, displayStatus } = useContext(reservationContext);
  const { user } = useContext(userContext);
  const [preview, setPreview] = useState(false);
  // console.log('below is curReservation');
  // console.log(curReservation);

  const
    {
      id: reserveId,
      status,
      flightId,
      payslipUrl,
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
    hdlChangeStatReserve(stat);
  };

  const hdlClickPreviewPayslip = () => {
    setPreview(c => !c);
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
          <h2 className="fz125 mb05 ttup">Booking Info :</h2>
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
          <h2 className="fz125 mb05 ttup">Room :</h2>
          {orderList?.filter(item => item['Service.serviceType'] === 'room')
            .map((item, idx) => (
              <div key={idx} className="dflex-jbetween ">
                <p className="ttcap">{`${item.amount} ${item['Service.name']} :`}</p>
                <p className="fz125">{item.amount * item.price} &#3647;</p>
              </div>
            ))
          }

        </div>

        <div className="borderbot mb1 pb1">
          <h2 className="fz125 mb05 ttup">extra :</h2>
          {orderList?.filter(item => item['Service.serviceType'] === 'extra')
            .map((item, idx) => (
              <div key={idx} className="dflex-jbetween ">
                <p className="ttcap">{`${item.amount} ${item['Service.name']} :`}</p>
                <p className="fz125">{item.amount * item.price} &#3647;</p>
              </div>
            ))
          }
        </div>
        <div className="dflex-jbetween alicenter mb1">
          <p className="fz15 ttup ">
            status :
            <span className={`fz15 ml05 ${displayStatus(status)}`}>{status}</span>
          </p>
          <p className="fz125 ">
            Total Trip:
            <span className="fz15" > {sumPrice} &#3647; </span>
          </p>
        </div>
        {preview && <div className=" mb1">
          <img className="previewPayslip container-with-bg" src={payslipUrl} alt="" />
        </div>}


        <div className="dflex-jbetween">
          <button className="btn-outline-blue fz125"
            onClick={hdlClickPreviewPayslip}
          >preview payslip</button>
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
              <button className="btn-outline-red fz125 ml1"
                onClick={() => hdlclickUpdateStatus('canceled')}
              >cancel a reservation</button> : null
            // <Link to={`/user-manage/UserCancelReserve`}>
            //   <button className="btn-outline-red fz125 ml1">cancel a reservation</button>
            // </Link> : null
          }
        </div>

      </ModalWithCloseBtn>
    </div>
  );
}

export default UserReverseInfo;
