import React, { useState } from 'react';

function SelectTypeRoom() {
  const [typeRoom, setTypeRoom] = useState('');

  console.log(typeRoom);

  return (
    <div className="selectTypeRoom dflex w75">
      <label className="btn-outline-white fz125 w25 mr1 " htmlFor="standardRoom">
        Standard Room
      </label>
      <input type="radio" name="roomType" id="standardRoom" value="standardRoom"
        onChange={e => setTypeRoom(e.target.value)}
        className="dnone"
      />

      <label className="btn-outline-white fz125 w25 mr1 " htmlFor="deluxeRoom">
        Deluxe Room
      </label>
      <input type="radio" name="roomType" id="deluxeRoom" value="deluxeRoom"
        onChange={e => setTypeRoom(e.target.value)}
      />

      <label className="btn-outline-white fz125 w25 mr1 " htmlFor="suitRoom">
        Suit Room
      </label>
      <input type="radio" name="roomType" id="suitRoom" value="suitRoom"
        onChange={e => setTypeRoom(e.target.value)}
      />



    </div>
  );
}

export default SelectTypeRoom;
