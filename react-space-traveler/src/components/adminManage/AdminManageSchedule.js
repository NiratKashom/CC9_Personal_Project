import React from 'react';
import AdminManageScheduleFilterBar from './AdminManageScheduleFilterBar';
import AdminMngSchdTable from './AdminMngSchdTable';
import ContainerWithHeadline from '../ContainerWithHeadline';


function AdminManageSchedule() {
  return (
    <div className="flex3">
      <ContainerWithHeadline headline="manage schedule"  >
        <AdminManageScheduleFilterBar />
        <AdminMngSchdTable />
      </ContainerWithHeadline>
    </div>
  );
}

export default AdminManageSchedule;
