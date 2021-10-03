import React from 'react';
import UserManageFilterBar from './UserManageFilterBar';
import UserManageTable from './UserManageTable';
import ContainerWithHeadline from '../ContainerWithHeadline';


function UserManageReservation() {
  return (
    <div className="flex3">
      <ContainerWithHeadline headline="manage reservation"  >
        <UserManageFilterBar />
        <UserManageTable />
      </ContainerWithHeadline>
    </div>
  );
}

export default UserManageReservation;
