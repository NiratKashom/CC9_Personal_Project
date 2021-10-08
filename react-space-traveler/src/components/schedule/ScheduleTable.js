import React from 'react';
import ScheduleTableRow from './ScheduleTableRow';


function ScheduleTable(props) {

  const { flightData } = props;

  return (
    <div className="schedule-table w100">
      {flightData.map((data, idx) => {
        return (

          <ScheduleTableRow key={idx} data={data} />

        );
      })}
    </div >
  );
}

export default ScheduleTable;



