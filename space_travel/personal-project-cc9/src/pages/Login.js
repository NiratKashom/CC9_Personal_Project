import React from 'react';
import ButtonSolid from '../components/ButtonSolid';

function Login() {
  return (
    <div className="center">
      <div className="login modal dflex-col p25">
        <p className="fz25 mb2">LOGIN</p>
        <input className="fz15 mb2 w100" type="text" placeholder="Email" />
        <input className="fz15 mb2 w100" type="text" placeholder="Password" />
        <div className="w100 dflex-jaround">
          <ButtonSolid title="register" class="btn-blue mr15  fz15 flex1" />
          <ButtonSolid title="login" class="btn-green  fz15 flex1" />
        </div>
      </div>
    </div>
  );
}

export default Login;
