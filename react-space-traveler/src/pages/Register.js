import React, { useState, useContext } from 'react';
import { userContext } from '../contexts/userContext';
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();
  const { hdlSubmitRegister } = useContext(userContext);
  const [regInfo, setRegInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });


  return (
    <div className="center">
      <div className="register modal dflex-col p25">
        <p className="fz25 mb2 ttup">register</p>
        <form action="">
          <div className="w100 dflex-jaround">
            <input className="fz15  mr125 mb2 w100" type="text"
              placeholder="First Name" value={regInfo.firstName}
              onChange={e => setRegInfo(curInfo => (
                { ...curInfo, firstName: e.target.value }
              ))}
            />
            <input className="fz15 mb2 w100" type="text"
              placeholder="Last Name" value={regInfo.lastName}
              onChange={e => setRegInfo(curInfo => (
                { ...curInfo, lastName: e.target.value }
              ))} />
          </div>
          <input className="fz15 mb2 w100" type="text" placeholder="Email"
            value={regInfo.email}
            onChange={e => setRegInfo(curInfo => (
              { ...curInfo, email: e.target.value }
            ))} />
          <input className="fz15 mb2 w100" type="password" placeholder="Password"
            value={regInfo.password}
            onChange={e => setRegInfo(curInfo => (
              { ...curInfo, password: e.target.value }
            ))} />
          <input className="fz15 mb2 w100" type="password" placeholder="Confirm Password"
            value={regInfo.confirmPassword}
            onChange={e => setRegInfo(curInfo => (
              { ...curInfo, confirmPassword: e.target.value }
            ))} />
          <button type="button"
            className="btn-green fz15 w100 "
            onClick={e => hdlSubmitRegister(e, regInfo)}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
