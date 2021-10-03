import React from 'react';

function ScheduleTableRow() {
  return (
    <div className="schedule-table-row container-with-bg dflex-jbetween m0auto mb15">
      <div>
        <p className="fz25">1</p>
        <p className="fz125">january</p>
        <p className="fz125">2022</p>
      </div>
      <div>
        <p className="fz125">day 1</p>
        <p className="fz2">earth</p>
        <p className="fz125">1 january 2022</p>
      </div>
      <p className="fz25 txtblue">--></p>
      <div>
        <p className="fz125">day 1</p>
        <p className="fz2">moon</p>
        <p className="fz125">1 january 2022</p>
      </div>
      <p className="fz25 txtgreen">--></p>
      <div>
        <p className="fz125">day 1</p>
        <p className="fz2">earth</p>
        <p className="fz125">1 january 2022</p>
      </div>
      <div>
        <p className="fz25">20</p>
        <p className="fz125">january</p>
        <p className="fz125">2022</p>
      </div>
      <div className="container-with-bg price-tag dflex-jcenter alignitmcenter">
        <p className="fz3">999999<span className="fz3">&#3647;</span></p>
      </div>
    </div>
  );
}

export default ScheduleTableRow;
