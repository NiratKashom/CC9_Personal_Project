import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../contexts/userContext';

function Login() {
  const { hdlUserLogin } = useContext(userContext);
  const [loginInput, setLoginInput] = useState({ email: '', password: '' });

  const hdlClickSubmitLogin = e => {
    e.preventDefault();
    hdlUserLogin(loginInput);
  };
  return (
    <div className="center">
      <div className="login modal dflex-col p25">
        <p className="fz25 mb2">LOGIN</p>
        <form onSubmit={e => hdlClickSubmitLogin(e)}>
          <input className="fz15 mb2 w100" type="text" placeholder="Email"
            value={loginInput.email}
            onChange={e => setLoginInput(cur => ({ ...cur, email: e.target.value }))}
          />
          <input className="fz15 mb2 w100" type="text" placeholder="Password"
            value={loginInput.password}
            onChange={e => setLoginInput(cur => ({ ...cur, password: e.target.value }))}
          />
          <div className="w100 dflex-jaround">
            <Link to="/register" className="btn-blue fz15 mr15 flex1">
              register
            </Link>
            <button type="submit" className="btn-green fz15 flex1 ">

              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
