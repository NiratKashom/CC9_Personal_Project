import React from 'react';

function AdminManageScheduleFilterBar() {
  return (
    <div class="admin-schedule-filter dflex-jbetween">
      <div>
        <label className="fz125 ttcap mr05" for="">destination :</label>
        <select className="p05 mr125 fz125 ttcap" >
          <option value="0">Choose</option>
          <option value="1">Moon</option>
          <option value="2">Mars</option>
          <optnion value="2">Jupiter</optnion>
        </select>
        <label className="fz125 ttcap mr05" for="">departure :</label>
        <input className="p05 fz125 ttup" type="date" />
      </div>
      <div>
        <button type="button"
          className="btn-blue fz125"
        >create schedule</button>
      </div>

    </div>
  );
}

export default AdminManageScheduleFilterBar;
