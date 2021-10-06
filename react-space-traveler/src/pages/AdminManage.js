import React from 'react';
import AdminMenu from '../components/adminManage/AdminMenu';
import AdminManageSchedule from '../components/adminManage/AdminManageSchedule';
import AdminEditFlight from '../components/adminManage/AdminEditFlight';
import AdminMngUserReserve from '../components/adminManage/AdminMngUserReserve';
import AdminMngUserReserveInfo from '../components/adminManage/AdminMngUserReserveInfo';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

function AdminManage() {
  const { path, url } = useRouteMatch();
  return (
    <div className="w75 px2 m0auto dflex alistart outline">
      <AdminMenu />
      <Switch>
        <Route exact path={path}>
          <AdminManageSchedule />
        </Route>
        <Route path={`${path}/create-flight`}>
          <AdminEditFlight />
        </Route>
        <Route path={`${path}/user-reservation`}>
          <AdminMngUserReserve />
        </Route>
      </Switch>

      {/* <AdminMngUserReserveInfo /> */}
    </div>
  );
}

export default AdminManage;
