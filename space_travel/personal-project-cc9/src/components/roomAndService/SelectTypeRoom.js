import React, { useState } from 'react';

function SelectTypeRoom() {
  const [typeRoom, setTypeRoom] = useState('');

  console.log(typeRoom);

  return (
    <div className="selectTypeRoom dflex w75">
      <label className="btn-outline-white" htmlFor="standardRoom">
        Standard Room
      </label>
      <input type="radio" name="roomType" id="standdardRoom" value="standardRoom"
        onChange={e => setTypeRoom(e.target.value)}
      />

      <label className="btn-outline-white" htmlFor="deluxeRoom">
        Deluxe Room
      </label>
      <input type="radio" name="roomType" id="deluxeRoom" value="deluxeRoom"
        onChange={e => setTypeRoom(e.target.value)}
      />

      <label className="btn-outline-white" htmlFor="suitRoom">
        Suit Room
      </label>
      <input type="radio" name="roomType" id="suitRoom" value="suitRoom"
        onChange={e => setTypeRoom(e.target.value)}
      />



    </div>
  );
}

export default SelectTypeRoom;
