import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'; import ScheduleTableRow from './ScheduleTableRow';


function ScheduleTable() {
  const { url } = useRouteMatch();
  return (
    <div className="schedule-table w100">
      <Link to={`${url}/room`} className="fz6">
        <ScheduleTableRow />
      </Link>
      <ScheduleTableRow />
      <ScheduleTableRow />
      <ScheduleTableRow />
      <ScheduleTableRow />
      <ScheduleTableRow />
      <ScheduleTableRow />
      <ScheduleTableRow />
      <ScheduleTableRow />
    </div >
  );
}

export default ScheduleTable;

