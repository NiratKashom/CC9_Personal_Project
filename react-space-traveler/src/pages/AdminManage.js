import React from 'react';
import AdminMenu from '../components/adminManage/AdminMenu';
import AdminManageSchedule from '../components/adminManage/AdminManageSchedule';
import AdminCreateFlight from '../components/adminManage/AdminCreateFlight';

function AdminManage() {
  return (
    <div className="w75 px2 m0auto dflex alistart outline">
      <AdminMenu />
      {/* <AdminManageSchedule /> */}
      <AdminManageSchedule />
      <AdminCreateFlight />
    </div>
  );
}

export default AdminManage;
