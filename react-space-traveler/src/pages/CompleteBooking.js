import React from 'react';
import ModalWithCloseBtn from '../components/ModalWithCloseBtn';
import { Link } from 'react-router-dom';

function CompleteBooking() {

  return (
    <div className="complete-booking modal-backdrop center outline ">

      <ModalWithCloseBtn headline="complete booking"
        addClass="txtcenter px25 complete-booking-detail"
      >
        <span className="material-icons-round fz6 txtgreen">
          check_circle_outline
        </span>
        <p className="fz15 mb05">Thank you for your reservation.</p>
        {/* <p className="fz15 mb05">Booking ID: D002MON0101220701221300</p> */}
        <p className="fz125">You can check reservation status at
          <Link to="/user-manage"
            className="link ttcap ml05 fz15"
          >
            Manage reservation
          </Link>
        </p>
      </ModalWithCloseBtn>

    </div>
  );
}

export default CompleteBooking;
