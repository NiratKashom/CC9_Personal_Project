import React from 'react';

function ButtonSolid(props) {

  return (
    <>
      <button
        className={props.class}
      // onClick={props.onClick}
      >
        {props.title}
      </button>
    </>
  );
}

export default ButtonSolid;
