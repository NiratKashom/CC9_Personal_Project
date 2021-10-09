import React from 'react';
import ScheduleTableRow from './ScheduleTableRow';
import { MOCK_FLIGHT } from '../../temp/MOCK_SHCEDULE_FLIGTH';

function ScheduleTable() {
  console.log(MOCK_FLIGHT);

  return (
    <div className="w100">
      {MOCK_FLIGHT.map((data, idx) => {
        return (
          <ScheduleTableRow key={idx} data={data} />
        );
      })}
    </div >
  );
}

export default ScheduleTable;



