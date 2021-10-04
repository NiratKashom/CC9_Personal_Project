import React from 'react';
import ModalWithCloseBtn from '../ModalWithCloseBtn';
function UserCancelComplete() {
  return (
    <div className="modal-backdrop center outline ">

      <ModalWithCloseBtn headline="completed cancelled "
        addClass="txtcenter px25 complete-booking-detail"
      >
        <span class="material-icons-outlined txtred fz6">
          cancel
        </span>
        <p className="fz15 mb05">Your booking has been cancelled.</p>
        <p className="fz15 mb05">Booking ID: D002MON0101220701221300</p>
      </ModalWithCloseBtn>

    </div>
  );
}

export default UserCancelComplete;
