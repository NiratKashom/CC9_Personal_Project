import React from 'react';

function ScheduleFilterBar() {
  return (
    <div class="schedule-filter my125">
      <label className="fz125 ttcap p05" for="">destination :</label>
      <select className="p05 mr125 fz125 ttcap" >
        <option value="0">Choose</option>
        <option value="1">Moon</option>
        <option value="2">Mars</option>
        <optnion value="2">Jupiter</optnion>
      </select>
      <label className="fz125 ttcap p05" for="">departure :</label>
      <input className="p05 fz125 ttup" type="date" />
    </div>
  );
}

export default ScheduleFilterBar;
