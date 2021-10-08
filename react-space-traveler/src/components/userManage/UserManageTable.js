import React from 'react';
import AdminMngUserTableRow from '../adminManage/AdminMngUserTableRow';
import { Link, useRouteMatch } from 'react-router-dom';

function UserManageTable() {
  const { path } = useRouteMatch();

  return (
    <div className="mt125">
      <Link to={`${path}/UserReverseInfo`}>
        <AdminMngUserTableRow />
      </Link>
      <AdminMngUserTableRow />
      <AdminMngUserTableRow />
    </div>
  );
}

export default UserManageTable;;;