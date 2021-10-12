import React from 'react';
import { getFormattedDate } from '../../services/dateService';
import { useHistory, useRouteMatch } from 'react-router-dom';


function AdminMngUserTableRow(props) {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { Flight: {
    departureDate, returnDate, arrivalDate, departure, destination },
    id, flightId, status } = props.data;



  const displayStatus = (status) => {
    switch (status) {
      case 'rejected':
        return 'txtred';
      case 'approved':
        return 'txtgreen';
      default:
        return 'txtorange';
    }
  };

  console.log('row had call');
  console.log(path);

  const enableHover = (path) => {
    if (path === '/admin-manage/user-reservation') return;
    return 'table-row';
  };

  return (
    <div className={`${enableHover} p125 container-with-bg dflex-jbetween mb125 pt1`}>
      {/* Id */}
      <div className="mr05">
        <p className="txtwhite80 ttup">Flight id:</p>
        <p className="ttup">{flightId}</p>
        <p className="txtwhite80 ttup">booking id:</p>
        <p className="ttup">{id}</p>
      </div>
      {/* date */}
      <div className="dflex-jbetween  w45 mr05">
        <div className="mr05">
          <p className="ttcap">day 31</p>
          <p className="fz125 ttcap">{departure}</p>
          <p className="ttcap">{getFormattedDate(departureDate)}</p>
        </div>
        <div className="mr05">
          <p className="ttcap">day 31</p>
          <p className="fz125  ttcap" >{destination}</p>
          <p className="ttcap">{getFormattedDate(arrivalDate)}</p>
        </div>
        <div className="mr05">
          <p className="ttcap">day 31</p>
          <p className="fz125   ttcap">{departure}</p>
          <p className="ttcap">{getFormattedDate(returnDate)}</p>
        </div>
      </div>
      {/* status */}
      <div className="  w10 mr05">
        <p className={`${displayStatus(status)} ttup txtcenter`}>{status}</p>
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
