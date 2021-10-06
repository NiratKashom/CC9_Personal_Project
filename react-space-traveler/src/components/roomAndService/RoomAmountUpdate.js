import React from 'react';

function RoomAmountUpdate() {
  return (
    <div className="room-update w100 dflex-jend">
      <label className="ttcap fz125 mr1">number of rooms :</label>
      <select className="fz125 p05 mr1">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button type="button" className="btn-blue fz125 p05">Update</button>
    </div>
  );
}

export default RoomAmountUpdate;
