import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav w100">
      <ul>
        <li className='branding'><Link to="/">SPACE TRAVEL</Link></li>
        {/* <li><Link to="./destination.html">DESTINATION</Link></li> */}
        <li><NavLink to="/schedule-flight">SCHEDULE</NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/user-manage">MANAGE RESERVATION</NavLink></li>
        <li><NavLink to="/admin-manage" >welcome username01</NavLink></li>
        <li><NavLink to="/login">LOG IN / REGISTER</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
