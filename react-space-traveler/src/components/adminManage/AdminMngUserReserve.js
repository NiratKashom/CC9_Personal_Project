import React from 'react';
import UserManageFilterBar from '../userManage/UserManageFilterBar';
import UserManageTable from '../userManage/UserManageTable';
import ContainerWithHeadline from '../ContainerWithHeadline';

function AdminMngUserReserve() {
  return (
    <div className="flex3">
      <ContainerWithHeadline headline="manage reservation"  >
        <UserManageFilterBar />
        <UserManageTable />
      </ContainerWithHeadline>
    </div>
  );
}

export default AdminMngUserReserve;
