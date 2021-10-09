import React from 'react';

function AdminMngSchdTableRow() {
  return (
    <div className="table-row txtcenter  ttcap container-with-bg dflex-jbetween mb1">
      <div className="dflex-jbetween flex4">
        <div>
          <p className="fz2">1</p>
          <p className="">sep</p>
          <p className="">2022</p>
        </div>
        <div>
          <p className="">day 1</p>
          <p className="fz2">earth</p>
          <p className="">1 sep 2022</p>
        </div>
        <p className="fz25 txtblue">{`->`}</p>
        <di>
          <p className="">day 1</p>
          <p className="fz2">moon</p>
          <p className="">1 sep 2022</p>
        </di>
        <p className="fz25 txtgreen">{`->`}</p>
        <div>
          <p className="">day 1</p>
          <p className="fz2">earth</p>
          <p className="">1 sep 2022</p>
        </div>
        <div className="mr15">
          <p className="fz2">20</p>
          <p className="">sep</p>
          <p className="">2022</p>
        </div>
      </div>
      <div className="flex1 p125 container-with-bg dflex-jcenter alicenter">
        <p className="fz2">999999<span className="fz15 ">&#3647;</span></p>
      </div>
    </div>
  );
}

// export default AdminMngSchdTableRow;
