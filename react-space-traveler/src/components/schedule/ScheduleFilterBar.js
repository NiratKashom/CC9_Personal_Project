import React from 'react';

function ScheduleFilterBar() {
  return (
    <div className="schedule-filter my125">
      <label className=" ttcap p05" >destination :</label>
      <select className="mr125 fz125 ttcap" >
        <option value="0">Choose</option>
        <option value="1">Moon</option>
        <option value="2">Mars</option>
        <option value="2">Jupiter</option>
      </select>
      <label className="p05">Departure date :</label>
      <input type="date" />
    </div>
  );
}

export default ScheduleFilterBar;
