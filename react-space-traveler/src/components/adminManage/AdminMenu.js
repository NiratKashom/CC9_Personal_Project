import React from 'react';

function AdminMenu() {
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
          <li><a href="./schedule.html" className="fz125">manage schedule</a></li>
          <li><a href="./schedule.html" className="fz125">back</a></li>
        </ul>
        <div className=" txtcenter mt15">
          <button className="btn-red fz15">logout</button>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
