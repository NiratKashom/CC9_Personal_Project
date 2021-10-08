import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { mockFlightContext } from '../contexts/mockContext';

function Navbar() {
  const { MOCK_ADMIN, MOCK_USER } = useContext(mockFlightContext);

  const user = MOCK_ADMIN;

  return (
    <nav className="nav w100">
      <ul>
        <li className='branding'><Link to="/">SPACE TRAVEL</Link></li>
        {/* <li><Link to="./destination.html">DESTINATION</Link></li> */}
        <li><NavLink to="/schedule-flight">SCHEDULE</NavLink></li>
      </ul>
      <ul>
        {user ?
          <>
            <li><NavLink to="/user-manage">MANAGE RESERVATION</NavLink></li>
            <li><NavLink to="/admin-manage" >welcome {user.firstName}</NavLink></li>
          </>
          :
          <>
            <li><NavLink to="/login">LOG IN / REGISTER</NavLink></li>
          </>
        }

      </ul>
    </nav>
  );
}

export default Navbar;
