import React, { useState } from 'react';

function SelectTypeRoom(props) {
  const { setRoomType } = props;


  return (
    <div className="selectTypeRoom dflex w75">
      <label className="btn-outline-white fz125 w25 mr1 " htmlFor="standard">
        Standard Room
      </label>
      <input type="radio" name="roomType" id="standard" value="standard"
        onChange={e => setRoomType(e.target.value)}
      />

      <label className="btn-outline-white fz125 w25 mr1 " htmlFor="deluxe">
        Deluxe Room
      </label>
      <input type="radio" name="roomType" id="deluxe" value="deluxe"
        onChange={e => setRoomType(e.target.value)}
      />

      <label className="btn-outline-white fz125 w25 mr1 " htmlFor="suit">
        Suit Room
      </label>
      <input type="radio" name="roomType" id="suit" value="suit"
        onChange={e => setRoomType(e.target.value)}
      />
    </div>
  );
}

export default SelectTypeRoom;
