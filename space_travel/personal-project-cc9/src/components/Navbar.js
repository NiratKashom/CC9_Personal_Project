import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li className='branding'><a href="./index.html">SPACE TRAVEL</a></li>
        <li><a href="./destination.html">DESTINATION</a></li>
        <li><a href="./schedule.html">SCHEDULE</a></li>
      </ul>
      <ul>
        {/* <li><a href="#">MANAGE RESERVATION</a></li>
        <li><a href="./userManageReservation.html" class="active">welcome username01</a></li> */}
        <li><a href="./login.html">LOG IN / REGISTER</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
