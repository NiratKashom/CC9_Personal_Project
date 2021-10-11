import React, { useState } from 'react';
import ScheduleFilterBar from '../schedule/ScheduleFilterBar';
import ScheduleTable from '../schedule/ScheduleTable';

function ScheduleSection() {
  const [filter, setFilter] = useState('');
  console.log(filter);
  return (
    <>
      <ScheduleFilterBar setFilter={setFilter} />
      <ScheduleTable filter={filter} />
    </>
  );
}

export default ScheduleSection;
