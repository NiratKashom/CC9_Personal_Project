import React, { useState, useEffect, useContext } from 'react';
import ScheduleFilterBar from '../schedule/ScheduleFilterBar';
import ScheduleTable from '../schedule/ScheduleTable';
import { summaryContext } from '../../contexts/summaryContext';
import { flightContext } from '../../contexts/flightContext';

function ScheduleSection() {
  const { setStep, setSummary } = useContext(summaryContext);
  const { filterFlight, setFilterFlight } = useContext(flightContext);

  useEffect(() => {
    setStep(0);
    setSummary([]);
  }, []);

  return (
    <>
      <ScheduleFilterBar setFilterFlight={setFilterFlight} filterFlight={filterFlight} />
      <ScheduleTable filterFlight={filterFlight} />
    </>
  );
}

export default ScheduleSection;
