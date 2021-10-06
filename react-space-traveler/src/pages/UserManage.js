import React from 'react';
import UserManageReservation from '../components/userManage/UserManageReservation';
import UserMenu from '../components/userManage/UserMenu';
import UserReverseInfo from '../components/userManage/UserReverseInfo';
import UserCancelReserve from '../components/userManage/UserCancelReserve';
import UserCancelComplete from '../components/userManage/UserCancelComplete';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

function UserManage() {
  const { path } = useRouteMatch();

  return (
    <div className="w75 px2 m0auto dflex alistart">
      <UserMenu />
      <UserManageReservation />
      <Switch >
        <Route exact path={`${path}/UserReverseInfo`}>
          <UserReverseInfo />
        </Route>
        <Route exact path={`${path}/UserCancelReserve`}>
          <UserCancelReserve />
        </Route>
        <Route exact path={`${path}/UserCancelComplete`}>
          <UserCancelComplete />
        </Route>
      </Switch>

    </div >
  );
}

export default UserManage;
