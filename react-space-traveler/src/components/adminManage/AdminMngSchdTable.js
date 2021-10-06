import React from 'react';
import AdminMngSchdTableRow from './AdminMngSchdTableRow';
import { Link, useRouteMatch } from 'react-router-dom';

function AdminMngSchdTable() {
  const { path } = useRouteMatch();

  return (
    <div className=" mt125">
      <Link to={`${path}/create-flight`}>
        <AdminMngSchdTableRow />
      </Link>
      <AdminMngSchdTableRow />
      <AdminMngSchdTableRow />
      <AdminMngSchdTableRow />
      <AdminMngSchdTableRow />

    </div >
  );
}

export default AdminMngSchdTable;
