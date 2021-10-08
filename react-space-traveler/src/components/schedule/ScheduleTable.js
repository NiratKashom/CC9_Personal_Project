import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'; import ScheduleTableRow from './ScheduleTableRow';


function ScheduleTable(props) {
  const { url } = useRouteMatch();
  const { flightData } = props;

  return (
    <div className="schedule-table w100">
      {flightData.map((data, idx) => {
        return (
          // <Link key={idx} to={`${url}/room/${data.flightId}`}>
          <ScheduleTableRow key={idx} data={data} />
          // </Link>
        );
      })}
    </div >
  );
}

export default ScheduleTable;



