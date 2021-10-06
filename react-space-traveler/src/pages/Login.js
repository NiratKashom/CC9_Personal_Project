import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="center">
      <div className="login modal dflex-col p25">
        <p className="fz25 mb2">LOGIN</p>
        <input className="fz15 mb2 w100" type="text" placeholder="Email" />
        <input className="fz15 mb2 w100" type="text" placeholder="Password" />
        <div className="w100 dflex-jaround">
          <Link to="/register" className="btn-blue fz15 mr15 flex1">
            register
          </Link>
          <button type="button"
            className="btn-green fz15 flex1 ">
            login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
