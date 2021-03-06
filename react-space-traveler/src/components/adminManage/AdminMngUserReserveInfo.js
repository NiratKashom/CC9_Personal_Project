import React, { useContext } from 'react';
import ModalWithCloseBtn from '../ModalWithCloseBtn';
import { reservationContext } from '../../contexts/reservationContext';
import { userContext } from '../../contexts/userContext';
// import { separateDate, getFormattedDate } from '../../services/dateService';


function AdminMngUserReserveInfo() {
  const { curReservation } = useContext(reservationContext);
  const { user } = useContext(userContext);
  console.log(user);
  console.log('call reserveInfo');
  console.log(curReservation);
  // const {
  //   departureDate,
  //   arrivalDate,
  //   returnDate,
  //   departure,
  //   destination,
  //   id,
  // } = curReservation;


  return (
    <div className="modal-backdrop center">
      <ModalWithCloseBtn headline="reservation infomation"

      >
        {/* <div className="borderbot mb1 pb1">
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
        </div> */}

        <div className="borderbot mb1 pb1">
          <h2 className="fz125 mb05 ttup">Booking Info</h2>
          <div className="dflex-jbetween">

            {/* <div >
              <div className="dflex-jbetween ">
                <p className="ttcap ">Booker name :</p>
                <p className="ml05 txtend ttcap fz125">nirat kashom</p>
              </div>
              <div className="dflex-jbetween">
                <p className="ttcap">email address: </p>
                <p className="ml05 txtend fz125">nkashom @email.com</p>
              </div>
            </div>

            <div>
              <div className="dflex-jbetween">
                <p className="ttcap">flight id: </p>
                <p className="ml05 txtend fz125">MON0101220701221300</p>
              </div>
              <div className="dflex-jbetween">
                <p className="ttcap">booking id: </p>
                <p className="ml05 txtend fz125">D002MON0101220801221300</p>
              </div>
            </div> */}
          </div>
        </div>


        <div className="borderbot mb1 pb1">
          <h2 className="fz125 mb05 ttup">Room</h2>
          <div className="dflex-jbetween ">
            <p>1 Standard room: </p>
            <p className="fz125 txtend ">999 &#3647; </p>
          </div>
          <div className="dflex-jbetween">
            <p className="ttcap">2 Deluxe room: </p>
            <p className="fz125 txtend ">3000 &#3647; </p>
          </div>
        </div>

        <div className="borderbot mb1 pb1">
          <h2 className="fz125 mb05 ttup">Extra Service</h2>
          <div className="dflex-jbetween">
            <p>3 Dinner buffet coupon: </p>
            <p className="fz125 txtend ">3000 &#3647; </p>
          </div>
          <div className="dflex-jbetween">
            <p>1 Travel Insurance: </p>
            <p className="fz125 txtend ">12335 &#3647; </p>
          </div>
        </div>

        <p className="fz125 txtend mb125">
          Total Trip:
          <span className="fz15" > 12335 &#3647; </span>
        </p>

        <div className="dflex-jbetween">
          <p className="fz15 ttup ">
            status :
            <span className="fz15 txtorange ml05">pending</span>
          </p>
          <div className="dflex w30">
            <button className="btn-red fz125 mr1 flex1 ">reject</button>

            <button className="btn-green fz125 flex1">approve</button>
          </div>
        </div>

      </ModalWithCloseBtn>
    </div>
  );
}

export default AdminMngUserReserveInfo;
