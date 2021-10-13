import React from 'react';

function ScheduleFilterBar({ setFilter }) {
  return (
    <div className="schedule-filter my125">
      <label className=" ttcap p05" >destination :</label>
      <select className="mr125 fz125 ttcap"
        onChange={e => setFilter(e.target.value)}>
        <option value="">Choose</option>
        <option value="moon">Moon</option>
        <option value="mars">Mars</option>
        <option value="jupiter">Jupiter</option>
      </select>
      {/* <label className="p05">Departure date :</label>
      <input type="date" /> */}
    </div>
  );
}

export default ScheduleFilterBar;
