import React from 'react';
import AdminMenu from '../components/adminManage/AdminMenu';
import AdminManageSchedule from '../components/adminManage/AdminManageSchedule';
import AdminEditFlight from '../components/adminManage/AdminEditFlight';

function AdminManage() {
  return (
    <div className="w75 px2 m0auto dflex alistart outline">
      <AdminMenu />
      {/* <AdminManageSchedule /> */}
      <AdminEditFlight />

    </div>
  );
}

export default AdminManage;
