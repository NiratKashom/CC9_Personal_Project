import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../contexts/userContext';


function Navbar() {
  const { user, hdlLogout } = useContext(userContext);


  return (
    <nav className="nav w100">
      <ul>
        <li className='branding'><Link to="/home">SPACE TRAVEL</Link></li>
        {/* <li><Link to="./destination.html">DESTINATION</Link></li> */}
        {!user?.isAdmin ? <li><NavLink to="/schedule-flight">SCHEDULE</NavLink></li> : null}

      </ul>
      <ul>
        {/* condition rendering by user and isAdmin */}
        {!user ?
          <>
            <li><NavLink to="/login">LOG IN / REGISTER</NavLink></li>
          </>
          :
          user.isAdmin ?
            <>
              <li><NavLink to="/admin-manage">MANAGE schedule</NavLink></li>
              <li>
                <NavLink to="#" >welcome admin</NavLink>
                <button className="btn-outline-red fz15 ml1"
                  onClick={hdlLogout}
                >logout</button>
              </li>
            </>
            :
            <>
              <li><NavLink to="/user-manage">MANAGE RESERVATION</NavLink></li>
              <li>
                <NavLink to="#" >welcome {user.firstName}</NavLink>
                <button className="btn-outline-red fz15 ml1"
                  onClick={hdlLogout}
                >logout</button>
              </li>
            </>
        }

      </ul>
    </nav >
  );
}

export default Navbar;
