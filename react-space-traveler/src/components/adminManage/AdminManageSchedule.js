import React, { useContext } from 'react';
import { flightContext } from '../../contexts/flightContext';
import ContainerWithHeadline from '../ContainerWithHeadline';
import ScheduleFilterBar from '../schedule/ScheduleFilterBar';
import ScheduleTable from '../schedule/ScheduleTable';


function AdminManageSchedule() {
  const { filterFlight, setFilterFlight } = useContext(flightContext);

  return (
    <div className="flex3">
      <ContainerWithHeadline headline="manage schedule" >
        <ScheduleFilterBar setFilterFlight={setFilterFlight} filterFlight={filterFlight} />
        <ScheduleTable filterFlight={filterFlight} />
      </ContainerWithHeadline>
    </div>
  );
}

export default AdminManageSchedule;
