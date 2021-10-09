import React from 'react';
import AdminManageScheduleFilterBar from './AdminManageScheduleFilterBar';
import ContainerWithHeadline from '../ContainerWithHeadline';
import ScheduleTable from '../schedule/ScheduleTable';


function AdminManageSchedule() {
  return (
    <div className="flex3">
      <ContainerWithHeadline headline="manage schedule"  >
        <AdminManageScheduleFilterBar />
        <ScheduleTable />
      </ContainerWithHeadline>
    </div>
  );
}

export default AdminManageSchedule;
