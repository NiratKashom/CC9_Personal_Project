import React from 'react';
import UserManageReservation from '../components/userManage/UserManageReservation';
import UserMenu from '../components/userManage/UserMenu';
import UserReverseInfo from '../components/userManage/UserReverseInfo';
import UserCancelReserve from '../components/userManage/UserCancelReserve';

function UserManage() {

  return (
    <div className="w84 px2 m0auto dflex alistart">
      <UserMenu />
      <UserManageReservation />
      {/* <UserReverseInfo /> */}
      <UserCancelReserve />
    </div >
  );
}

export default UserManage;
