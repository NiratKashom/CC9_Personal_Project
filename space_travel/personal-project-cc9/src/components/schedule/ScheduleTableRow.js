import React from 'react';

function ScheduleTableRow() {
  return (
    <div class="schedule-table-row container-with-bg dflex-jbetween mb15">
      <div class="departure-date dflex-col-center">
        <p>1</p>
        <p>january</p>
        <p>2022</p>
      </div>
      <div class="start-dest ">
        <p>day 1</p>
        <p>earth</p>
        <p>1 january 2022</p>
      </div>
      <div class="arrow">--></div>
      <div class="target-dest dflex-col-center">
        <p>day 1</p>
        <p>earth</p>
        <p>1 january 2022</p>
      </div>
      <div class="arrow">--></div>
      <div class="return-dest dflex-col-center">
        <p>day 1</p>
        <p>earth</p>
        <p>1 january 2022</p>
      </div>
      <div class="return-date dflex-col-center">
        <p>20</p>
        <p>january</p>
        <p>2022</p>
      </div>
      <div class="container-with-bg price-tag">
        <p>9999<span>&#3647;</span></p>
      </div>
    </div>

  );
}

export default ScheduleTableRow;
