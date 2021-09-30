import React from 'react';

function Register() {
  return (
    <div className="center">
      <div className="register modal dflex-col p25">
        <p className="fz25 mb2 ttup">register</p>
        <form action="">
          <div className="w100 dflex-jaround">
            <input className="fz15  mr125 mb2 w100" type="text" placeholder="First Name" />
            <input className="fz15 mb2 w100" type="text" placeholder="Last Name" />
          </div>
          <input className="fz15 mb2 w100" type="text" placeholder="Email" />
          <input className="fz15 mb2 w100" type="text" placeholder="Password" />
          <input className="fz15 mb2 w100" type="text" placeholder="Confirm Password" />
          <button type="button"
            className="btn-green fz15 w100 ">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
