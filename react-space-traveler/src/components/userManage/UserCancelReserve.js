import React from 'react';
import ModalWithCloseBtn from '../ModalWithCloseBtn';

function UserCancelReserve() {
  return (
    <div className="modal-backdrop center ">

      <ModalWithCloseBtn headline="cancel a resrrvation"
        addClass="dflex alistart"
      >
        <div className="left-sector borderright mr1 ">
          <div className="borderbot">
            <div className="dflex-jbetween">
              <div className="dflex-col-center mr15 ttcap">
                <p className="fz25">1</p>
                <p className="fz125">january</p>
                <p className="fz125">2022</p>
              </div>
              <div className="dflex-col-center ttcap">
                <p className="fz125">day 1</p>
                <p className="fz2">earth</p>
                <p className="fz125">1 january 2022</p>
              </div>
              <p className="fz25 txtblue">-></p>
              <div className=" dflex-col-center ttcap">
                <p className="fz125">day 1</p>
                <p className="fz2">moon</p>
                <p className="fz125">1 january 2022</p>
              </div>
              <p className="fz25 txtgreen">-></p>
              <div className="dflex-col-center ttcap">
                <p className="fz125">day 1</p>
                <p className="fz2">earth</p>
                <p className="fz125">1 january 2022</p>
              </div>
              <div className="dflex-col-center ml15 ttcap" >
                <p className="fz25">20</p>
                <p className="fz125">january</p>
                <p className="fz125">2022</p>
              </div>
            </div>
          </div>

          <div className="borderbot">
            <h2 className="fz125 mb05 ttup">Booking Info</h2>
            <div className="dflex-jbetween">
              <div >
                <div className="dflex-jbetween ">
                  <p className="ttcap ">Booker name: </p>
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
              </div>
            </div>
          </div>


          <div className="borderbot">
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

          <div className="borderbot">
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

          <p className="fz125 txtend">
            Total Trip:
            <span className="fz15" > 12335 &#3647; </span>
          </p>
        </div>

        <div className="right-sector ">
          <div className="">
            <p className="ttup mb1">select refund method</p>
            <select className="w75 mb1" name="" id="">

            </select>
            <p className="ttup mb1">reason ofr refund request</p>
            <textarea className="mb1" name="" id="" cols="40" rows="10"></textarea>
          </div>
          <div className="cancelBtn">
            <button class=" fz125 btn-red">cancel a reservation</button>
          </div>
        </div>
      </ModalWithCloseBtn >
    </div >

  );
}

export default UserCancelReserve;
