import React from 'react';
import ScheduleFilterBar from '../schedule/ScheduleFilterBar';
import ScheduleTable from '../schedule/ScheduleTable';

function ScheduleSection(props) {
  return (
    <>
      <ScheduleFilterBar />
      <ScheduleTable flightData={props.flightData} />
    </>
  );
}

export default ScheduleSection;
