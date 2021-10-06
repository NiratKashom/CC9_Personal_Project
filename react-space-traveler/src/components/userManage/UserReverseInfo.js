import React from 'react';
import { Link } from 'react-router-dom';
import ModalWithCloseBtn from '../ModalWithCloseBtn';


function UserReverseInfo() {
  return (
    <div className="modal-backdrop center">
      <ModalWithCloseBtn headline="reservation infomation"
        addClass=""
      >
        <div className="borderbot mb1 pb1">
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
            <p className="fz25 txtblue">{`->`}</p>
            <div className=" dflex-col-center ttcap">
              <p className="fz125">day 1</p>
              <p className="fz2">moon</p>
              <p className="fz125">1 january 2022</p>
            </div>
            <p className="fz25 txtgreen">{`->`}</p>
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

        <div className="borderbot mb1 pb1">
          <h2 className="fz125 mb05 ttup">Booking Info</h2>
          <div className="dflex-jbetween">
            <div >
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
            </div>
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
          <Link to={`/user-manage/UserCancelReserve`}>
            <button className="btn-outline-red fz125 ml1">cancel a reservation</button>
          </Link>
        </div>

      </ModalWithCloseBtn>
    </div>
  );
}

export default UserReverseInfo;
