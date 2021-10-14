import React, { useContext } from 'react';
import { userContext } from '../../contexts/userContext';

function UserMenu() {
  const { hdlLogout, user } = useContext(userContext);
  return (
    <div className="menu p0 flex1 mr1 container-with-bg ">
      <div className="headline txtcenter">
        <span className="material-icons-outlined fz25">
          account_circle
        </span>
        <p className="fz15 ttcap">{`${user.firstName} ${user.lastName}`}</p>
        <div className="dflex-jcenter mt05">
          <p className="fz1 ttup txtwhite80 mr05">user ID :</p>
          <p className="fz1">{user.id}</p>
        </div>
      </div>
      <div className="content txtcenter ">
        {/* <ul className="user-menu-list mt1">
          <li><a href="./schedule.html" className="fz125">manage reservation</a></li>
          <li><a href="./schedule.html" className="fz125">back</a></li>
        </ul> */}
        <button className="btn-red fz15" onClick={hdlLogout} >logout</button>
      </div>
    </div>
  );
}

export default UserMenu;
