import React, { useState } from 'react';

function SelectTypeRoom(props) {
  const { setRoomType } = props;
  const [active, setActive] = useState('standard');

  const hdlClickSelectTypeRoom = (e) => {
    setActive(e.target.value);
    setRoomType(e.target.value);
  };


  return (
    <div className="selectTypeRoom dflex w75">
      <label htmlFor="standard"
        className={`btn-outline-white${active === 'standard' ? '-active' : ''} fz125 w25 mr1`}
      >
        Standard Room
      </label>
      <input type="radio" name="roomType" id="standard" value="standard"
        onChange={e => hdlClickSelectTypeRoom(e)}
      />

      <label className={`btn-outline-white${active === 'deluxe' ? '-active' : ''} fz125 w25 mr1`} htmlFor="deluxe">
        Deluxe Room
      </label>
      <input type="radio" name="roomType" id="deluxe" value="deluxe"
        onChange={e => hdlClickSelectTypeRoom(e)}
      />

      <label className={`btn-outline-white${active === 'suite' ? '-active' : ''} fz125 w25 mr1`} htmlFor="suite">
        Suite Room
      </label>
      <input type="radio" name="roomType" id="suite" value="suite"
        onChange={e => hdlClickSelectTypeRoom(e)}
      />
    </div >
  );
}

export default SelectTypeRoom;
