import React from 'react';

function AdminMngUserTableRow() {
  return (
    <div className="table-row container-with-bg dflex-jbetween mb125 pt1">
      {/* Id */}
      <div className="mr05">
        <p className="txtwhite80 ttup">Flight id:</p>
        <p>MON0101220701221300</p>
        <p className="txtwhite80 ttup">booking id:</p>
        <p>D002MON0101220701221300</p>
      </div>
      {/* date */}
      <div className="dflex-jbetween  w45 mr05">
        <div className="mr05">
          <p className="ttcap">day 31</p>
          <p className="fz125 ttcap">jupiter</p>
          <p className=" ttcap">1 sep 9999</p>
        </div>
        <div className="mr05">
          <p className="ttcap">day 31</p>
          <p className="fz125  ttcap" >jupiter</p>
          <p className="ttcap">1 sep 9999</p>
        </div>
        <div className="mr05">
          <p className="ttcap">day 31</p>
          <p className="fz125   ttcap">jupiter</p>
          <p className="ttcap">1 sep 9999</p>
        </div>
      </div>
      {/* status */}
      <div className="  w10 mr05">
        <p className="txtorange ttup txtcenter">pending</p>
      </div>
      {/* action */}
      <div className=" w10 txtcenter dflex-jaround">
        <button className="material-icons-outlined txtblue fz2">
          description
        </button>
        <span className="material-icons-round fz2 txtgreen">
          check_circle_outline
        </span>
        <button className="material-icons-outlined txtred fz2">
          cancel
        </button>
      </div>
    </div>
  );
}

export default AdminMngUserTableRow;
