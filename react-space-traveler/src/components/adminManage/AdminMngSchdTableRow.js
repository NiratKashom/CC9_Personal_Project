import React from 'react';

function AdminMngSchdTableRow() {
  return (
    <div className="table-row txtcenter ttcap container-with-bg dflex-jbetween mb1">
      <div className="flex1">
        <p className="fz25">1</p>
        <p className="fz125">sep</p>
        <p className="fz125">2022</p>
      </div>
      <div className="flex2">
        <p className="fz125">day 1</p>
        <p className="fz2">earth</p>
        <p className="fz125">1 sep 2022</p>
      </div>
      <p className="fz25 txtblue">{`->`}</p>
      <div className="flex2">
        <p className="fz125">day 1</p>
        <p className="fz2">moon</p>
        <p className="fz125">1 sep 2022</p>
      </div>
      <p className="fz25 txtgreen">{`->`}</p>
      <div className="flex2">
        <p className="fz125">day 1</p>
        <p className="fz2">earth</p>
        <p className="fz125">1 sep 2022</p>
      </div>
      <div className="flex1">
        <p className="fz25">20</p>
        <p className="fz125">sep</p>
        <p className="fz125">2022</p>
      </div>
      <div className="flex1 container-with-bg price-tag dflex-jcenter alignitmcenter">
        <p className="fz2">999999<span className="fz2 m;1">&#3647;</span></p>
      </div>
    </div>
  );
}

export default AdminMngSchdTableRow;
