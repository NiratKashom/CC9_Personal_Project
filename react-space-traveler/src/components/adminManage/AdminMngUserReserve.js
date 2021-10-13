import React, { useState } from 'react';
import UserManageFilterBar from '../userManage/UserManageFilterBar';
import UserManageTable from '../userManage/UserManageTable';
import ContainerWithHeadline from '../ContainerWithHeadline';

function AdminMngUserReserve() {
  const [reserveFilter, setReserveFilter] = useState('');
  return (
    <div className="flex3">
      <ContainerWithHeadline headline="manage reservation"  >
        <UserManageFilterBar setReserveFilter={setReserveFilter} />
        <UserManageTable reserveFilter={reserveFilter} />
      </ContainerWithHeadline>
    </div>
  );
}

export default AdminMngUserReserve;
