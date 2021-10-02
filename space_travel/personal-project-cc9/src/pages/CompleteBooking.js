import React from 'react';
import ModalWithCloseBtn from '../components/ModalWithCloseBtn';

function CompleteBooking() {
  return (
    <div className="complete-booking modal-backdrop center outline ">

      <ModalWithCloseBtn headline="complete booking"
        addClass="txtcenter px25 complete-booking-detail"
      >
        <span class="material-icons-round">
          check_circle_outline
        </span>
        <p className="fz15 mb05">Thank you for your reservation.</p>
        <p className="fz15 mb05">Booking ID: D002MON0101220701221300</p>
        <p className="fz125">You can check booking status in
          <a href="./userManageReservation.html"
            class="link ttcap ml05 fz15"
          >
            Manage reservation
          </a>
        </p>
      </ModalWithCloseBtn>

    </div>
  );
}

export default CompleteBooking;
