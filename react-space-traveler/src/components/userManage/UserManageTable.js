import React from 'react';
import AdminMngUserTableRow from '../adminManage/AdminMngUserTableRow';
import { Link, useRouteMatch } from 'react-router-dom';

function UserManageTable() {
  const { path, url } = useRouteMatch();
  return (
    <div className="mt125">
      <Link exact to={`${url}/UserReverseInfo`}>
        <AdminMngUserTableRow />
      </Link>
      <AdminMngUserTableRow />
      <AdminMngUserTableRow />
      <AdminMngUserTableRow />
      <AdminMngUserTableRow />
      <AdminMngUserTableRow />
      <AdminMngUserTableRow />


    </div>
  );
}

export default UserManageTable;;;