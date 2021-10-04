import React from 'react';
import UserManageReservation from '../components/userManage/UserManageReservation';
import UserMenu from '../components/userManage/UserMenu';
import UserReverseInfo from '../components/userManage/UserReverseInfo';
import UserCancelReserve from '../components/userManage/UserCancelReserve';
import UserCancelComplete from '../components/userManage/UserCancelComplete';

function UserManage() {

  return (
    <div className="w75 px2 m0auto dflex alistart">
      <UserMenu />
      <UserManageReservation />
      {/* <UserReverseInfo /> */}
      {/* <UserCancelReserve /> */}
      {/* <UserCancelComplete /> */}
    </div >
  );
}

export default UserManage;
