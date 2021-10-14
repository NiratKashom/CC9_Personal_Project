import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../contexts/userContext';
import { validateContext } from '../contexts/validateContext';

function Login() {
  const { hdlSubmitLogin } = useContext(userContext);
  const { errLogin, validateLogin } = useContext(validateContext);
  const [loginInput, setLoginInput] = useState({ email: '', password: '' });

  const hdlClickValidateLogin = (e) => {
    e.preventDefault();
    if (validateLogin(loginInput)) {
      hdlSubmitLogin(e, loginInput);
    }
    return;
  };

  return (
    <div className="center">
      <div className="login modal dflex-col p25">
        <p className="fz25 mb1">LOGIN</p>
        {errLogin && <p className="red-box-outline mb1 ttcap">{errLogin}</p>}
        <form onSubmit={e => hdlClickValidateLogin(e)}>
          <input className="fz15 mb2 w100" type="text" placeholder="Email"
            value={loginInput.email}
            onChange={e => setLoginInput(cur => ({ ...cur, email: e.target.value }))}
          />
          <input className="fz15 mb2 w100" type="text" placeholder="Password" type="password"
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
