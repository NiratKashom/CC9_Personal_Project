import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function AdminManageScheduleFilterBar() {
  const { url } = useRouteMatch();
  return (
    <div className="dflex-jbetween mb1">
      <div>
        <label className="fz125 ttcap mr05" >destination :</label>
        <select className="p05 mr125 fz125 ttcap" >
          <option value="0">Choose</option>
          <option value="1">Moon</option>
          <option value="2">Mars</option>
          <option value="2">Jupiter</option>
        </select>
        <label className="fz125 ttcap mr05" >departure :</label>
        <input className="p05 fz125 ttup" type="date" />
      </div >
      <div>

        <Link to={`${url}/manage-flight`}
          className="btn-blue fz125"
        >create schedule</Link>
      </div>

    </div >
  );
}

export default AdminManageScheduleFilterBar;
