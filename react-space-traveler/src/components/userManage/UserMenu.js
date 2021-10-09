import React, { useContext } from 'react';
import { userContext } from '../../contexts/userContext';

function UserMenu() {
  const { hdlLogout } = useContext(userContext);
  return (
    <div className="menu p0 flex1 mr1 container-with-bg ">
      <div className="headline txtcenter">
        <span className="material-icons-outlined fz25">
          account_circle
        </span>
        <p className="fz15">Firstname Lastname</p>
      </div>
      <div className="content ">
        <ul className="user-menu-list mt1">
          <li><a href="./schedule.html" className="fz125">manage reservation</a></li>
          <li><a href="./schedule.html" className="fz125">back</a></li>
        </ul>
        <div className=" txtcenter mt15">
          <button className="btn-red fz15" onClick={hdlLogout} >logout</button>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
