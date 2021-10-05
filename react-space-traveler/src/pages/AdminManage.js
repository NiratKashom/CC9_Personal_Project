import React from 'react';
import AdminMenu from '../components/adminManage/AdminMenu';
import AdminManageSchedule from '../components/adminManage/AdminManageSchedule';
import AdminEditFlight from '../components/adminManage/AdminEditFlight';
import AdminMngUserReserve from '../components/adminManage/AdminMngUserReserve';
import AdminMngUserReserveInfo from '../components/adminManage/AdminMngUserReserveInfo';

function AdminManage() {
  return (
    <div className="w75 px2 m0auto dflex alistart outline">
      <AdminMenu />
      {/* <AdminManageSchedule /> */}
      {/* <AdminEditFlight /> */}
      <AdminMngUserReserve />
      <AdminMngUserReserveInfo />


    </div>
  );
}

export default AdminManage;
