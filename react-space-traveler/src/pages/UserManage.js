import React from 'react';
import UserManageReservation from '../components/userManage/UserManageReservation';
import UserMenu from '../components/userManage/UserMenu';
import UserReverseInfo from './UserReverseInfo';

function UserManage() {

  return (
    <div className="w84 px2 m0auto dflex alistart">
      {/* <UserMenu />
      <UserManageReservation /> */}
      <UserReverseInfo />
    </div >
  );
}

export default UserManage;
