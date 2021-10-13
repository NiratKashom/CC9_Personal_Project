import React, { useContext } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { userContext } from '../../contexts/userContext';

function AdminMenu() {
  const { hdlLogout } = useContext(userContext);
  const { url } = useRouteMatch();
  return (
    <div className="menu flex1 mr1 container-with-bg p0">
      <div className="headline txtcenter">
        <span className="material-icons-outlined fz25 ">
          account_circle
        </span>
        <p className="fz15">ADMIN</p>
      </div>
      <div className="content ">
        <ul className="user-menu-list mt1">
          <li><NavLink to={`${url}`} className="fz125 ttcap">
            manage schedule
          </NavLink></li>
          <li><NavLink to={`${url}/user-reservation`} className="fz125 ttcap">
            manage reservation
          </NavLink></li>
        </ul>
        <div className=" txtcenter mt15">
          <button className="btn-red fz15" onClick={hdlLogout}>logout</button>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
