import React from 'react';
import UserManageReservation from '../components/userManage/UserManageReservation';
import UserMenu from '../components/userManage/UserMenu';

function UserManage() {

  return (
    <div className="w84 px2 m0auto dflex alistart">
      <UserMenu />
      <UserManageReservation />

    </div >
  );
}

export default UserManage;
