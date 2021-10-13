import React from 'react';
import AdminMenu from '../components/adminManage/AdminMenu';
import AdminManageSchedule from '../components/adminManage/AdminManageSchedule';
import AdminEditFlight from '../components/adminManage/AdminEditFlight';
import AdminMngUserReserve from '../components/adminManage/AdminMngUserReserve';
// import AdminMngUserReserveInfo from '../components/adminManage/AdminMngUserReserveInfo';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import UserReverseInfo from '../components/userManage/UserReverseInfo';

function AdminManage() {
  const { path, url } = useRouteMatch();
  return (
    <div className="w75 px2 m0auto dflex alistart">
      <AdminMenu />
      <Switch>
        <Route path={`${path}/manage-flight`}>
          <AdminEditFlight />
        </Route>
        <Route path={`${path}/user-reservation`}>
          <AdminMngUserReserve />
          <Switch >
            <Route path={`${path}/user-reservation/MngReserveInfo`}>
              <UserReverseInfo />
            </Route>
          </Switch>
        </Route>
        <Route exact path={path}>
          <AdminManageSchedule />
        </Route>
        <Route path='*'>
          <p>404 page not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default AdminManage;
