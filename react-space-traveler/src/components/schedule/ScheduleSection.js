import React, { useState, useEffect, useContext } from 'react';
import ScheduleFilterBar from '../schedule/ScheduleFilterBar';
import ScheduleTable from '../schedule/ScheduleTable';
import { summaryContext } from '../../contexts/summaryContext';

function ScheduleSection() {
  const { setStep } = useContext(summaryContext);

  const [filter, setFilter] = useState('');
  useEffect(() => {
    setStep(0);
  }, []);

  return (
    <>
      <ScheduleFilterBar setFilter={setFilter} />
      <ScheduleTable filter={filter} />
    </>
  );
}

export default ScheduleSection;
