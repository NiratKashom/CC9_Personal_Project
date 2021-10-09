import React from 'react';
import AdminMenu from '../components/adminManage/AdminMenu';
import AdminManageSchedule from '../components/adminManage/AdminManageSchedule';
import AdminEditFlight from '../components/adminManage/AdminEditFlight';
import AdminMngUserReserve from '../components/adminManage/AdminMngUserReserve';
import AdminMngUserReserveInfo from '../components/adminManage/AdminMngUserReserveInfo';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

function AdminManage() {
  const { path } = useRouteMatch();
  return (
    <div className="w75 px2 m0auto dflex alistart outline">
      <AdminMenu />
      <Switch>
        <Route path={`${path}/AdminMngUserReserveInfo`}>
          <AdminMngUserReserveInfo />
        </Route>
        <Route path={`${path}/manage-flight`}>
          <AdminEditFlight />
        </Route>
        <Route path={`${path}/user-reservation`}>
          <AdminMngUserReserve />
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
