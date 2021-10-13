import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function ScheduleFilterBar({ setFilterFlight, filterFlight }) {
  const { url } = useRouteMatch();

  return (
    <div className={`schedule-filter dflex-jbetween ${url === '/schedule-flight' ? 'my125' : 'mb1'}`}>
      <div>
        <label className=" ttcap p05" >destination :</label>
        <select className="mr125 fz125 ttcap" value={filterFlight}
          onChange={e => setFilterFlight(e.target.value)}>
          <option value="">Choose</option>
          <option value="moon">Moon</option>
          <option value="mars">Mars</option>
          <option value="jupiter">Jupiter</option>
        </select>
      </div>
      {
        url !== '/schedule-flight' ?
          <div>
            <Link to={`${url}/manage-flight`} className="btn-blue fz125">
              create schedule
            </Link>
          </div> : null
      }
    </div>
  );
}

export default ScheduleFilterBar;
