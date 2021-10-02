import React from 'react';
import ScheduleFilterBar from '../schedule/ScheduleFilterBar';
import ScheduleTable from '../schedule/ScheduleTable';

function ScheduleSection() {
  return (
    <>
      <ScheduleFilterBar />
      <ScheduleTable />
    </>
  );
}

export default ScheduleSection;
