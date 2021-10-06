import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function AdminMenu() {
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

          <li><Link to={`${url}`} className="fz125 ttcap">
            manage schedule
          </Link></li>
          <li><Link to={`${url}/user-reservation`} className="fz125 ttcap">
            manage reservation
          </Link></li>
        </ul>
        <div className=" txtcenter mt15">
          <button className="btn-red fz15">logout</button>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
