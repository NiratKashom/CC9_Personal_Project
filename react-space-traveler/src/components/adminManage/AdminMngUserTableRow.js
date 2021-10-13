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
        <p className="ttup fz125">{flightId}</p>
        <p className="txtwhite80 ttup">booking id:</p>
        <p className="ttup fz125">{id}</p>
      </div>
      {/* date */}
      <div className="dflex-jbetween  w45 mr05 ">
        <div className="mr05 ">
          <p className="ttcap txtwhite80">day 31</p>
          <p className="fz15 ttcap lh2">{departure}</p>
          <p className="ttcap fz125">{getFormattedDate(departureDate)}</p>
        </div>
        <div className="mr05">
          <p className="ttcap txtwhite80">day 31</p>
          <p className="fz15  ttcap lh2" >{destination}</p>
          <p className="ttcap fz125">{getFormattedDate(arrivalDate)}</p>
        </div>
        <div className="mr05">
          <p className="ttcap txtwhite80">day 31</p>
          <p className="fz15  ttcap lh2">{departure}</p>
          <p className="ttcap fz125">{getFormattedDate(returnDate)}</p>
        </div>
      </div>
      {/* status */}
      <div className="w10 mr05">
        <p className={`${displayStatus(status)} fz15 ttup txtcenter`}>{status}</p>
      </div>
      {/* action */}
      <div className=" w10 txtcenter dflex-jaround alicenter">
        <button className="material-icons-outlined txtblue fz25"
          onClick={() => hdlClickSetCurReservation(id)}>
          description
        </button>
        {!user.isAdmin ? null : status !== 'pending' ?
          <span className="material-icons-round fz25 txtwhite80">
            check_circle_outline
          </span> :
          <button className="material-icons-round fz25 txtgreen">
            check_circle_outline
          </button>
        }

        {status !== 'pending' ?
          <span className="material-icons-outlined txtwhite80 fz25">
            cancel
          </span> :
          <butto className="material-icons-outlined txtred fz25 pointer">
            cancel
          </butto>
        }
      </div>
    </div >
  );
}

export default AdminMngUserTableRow;
