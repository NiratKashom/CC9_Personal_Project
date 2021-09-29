import React, { useState } from 'react';

function SelectTypeRoom() {
  const [typeRoom, setTypeRoom] = useState('');

  console.log(typeRoom);

  return (
    <div className="selectTypeRoom">
      <input type="radio" name="roomType" id="standdardRoom" value="standdardRoom"
        className="" onChange={e => setTypeRoom(e.target.value)} />
      <label className="btn-outline-white" htmlFor="standdardRoom">
        Standard Room
      </label>

      <input type="radio" name="roomType" id="deluxeRoom" value="deluxeRoom"
        className="" onChange={e => setTypeRoom(e.target.value)} />
      <label className="btn-outline-white" htmlFor="deluxeRoom">
        Deluxe Room
      </label>

      <input type="radio" name="roomType" id="suitRoom" value="suitRoom"
        className="" onChange={e => setTypeRoom(e.target.value)} />
      <label className="btn-outline-white" htmlFor="suitRoom">
        Suit Room
      </label>
    </div>
  );
}

export default SelectTypeRoom;
