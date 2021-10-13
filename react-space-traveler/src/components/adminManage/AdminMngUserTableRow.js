import React, { useContext } from 'react';
import { getFormattedDate } from '../../services/dateService';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { reservationContext } from '../../contexts/reservationContext';
import { userContext } from '../../contexts/userContext';
import axios from '../../config/axios';


function AdminMngUserTableRow(props) {
  const { user } = useContext(userContext);
  const history = useHistory();
  const { path } = useRouteMatch();
  const { setCurReservation, displayStatus } = useContext(reservationContext);
  const { Flight: {
    departureDate, returnDate, arrivalDate, departure, destination },
    id, flightId, status } = props.data;

  const enableHover = (path) => {
    if (path === '/admin-manage/user-reservation') return;
    return 'table-row';
  };

  const hdlClickSetCurReservation = async (id) => {
    // hdlClickSetCurReservation(id);
    try {
      const res = await axios.get(`/reservation/reservationInfo/${id}`);
      setCurReservation(cur => ({ ...cur, ...res.data.reservationById }));
      if (user.isAdmin) {
        console.log('admin fetch success');
        history.push(`${path}/MngReserveInfo`);
      } else {
        console.log('user fetch success');
        history.push(`${path}/UserReverseInfo`);
      }
    } catch (error) {
      console.log(error);
    }
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
      <div className=" w10 txtcenter dflex-jaround alicenter">
        <button className="material-icons-outlined txtblue fz2"
          onClick={() => hdlClickSetCurReservation(id)}>
          description
        </button>
        {!user.isAdmin ? null : status !== 'pending' ?
          <span className="material-icons-round fz2 txtwhite80">
            check_circle_outline
          </span> :
          <button className="material-icons-round fz2 txtgreen">
            check_circle_outline
          </button>
        }

        {status !== 'pending' ?
          < span className="material-icons-outlined txtwhite80 fz2">
            cancel
          </span> :
          < button className="material-icons-outlined txtred fz2">
            cancel
          </button>
        }
      </div>
    </div >
  );
}

export default AdminMngUserTableRow;
