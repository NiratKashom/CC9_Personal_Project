import React, { useState } from 'react';
import UserManageFilterBar from './UserManageFilterBar';
import UserManageTable from './UserManageTable';
import ContainerWithHeadline from '../ContainerWithHeadline';


function UserManageReservation() {
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

export default UserManageReservation;
