import React from 'react';
import AdminMenu from '../components/adminManage/AdminMenu';
import AdminManageSchedule from '../components/adminManage/AdminManageSchedule';

function AdminManage() {
  return (
    <div className="w84 px2 m0auto dflex alistart outline">
      <AdminMenu />
      <AdminManageSchedule />
    </div>
  );
}

export default AdminManage;
