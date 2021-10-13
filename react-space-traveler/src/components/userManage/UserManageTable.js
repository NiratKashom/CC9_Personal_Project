import React, { useContext, useEffect } from 'react';
import AdminMngUserTableRow from '../adminManage/AdminMngUserTableRow';
import { Link, useRouteMatch } from 'react-router-dom';
import { reservationContext } from '../../contexts/reservationContext';
import { userContext } from '../../contexts/userContext';
import axios from 'axios';

function UserManageTable() {
  const { reservation, setReservation } = useContext(reservationContext);
  const { user } = useContext(userContext);
  // const { path } = useRouteMatch();

  useEffect(() => {
    if (user.isAdmin) {
      axios.get('/reservation')
        .then(res => {
          setReservation(res.data.allReservation);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios.get(`/reservation/${user.id}`)
        .then(res => {
          setReservation(res.data.reserveByUser);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  console.log(reservation);

  return (
    <div className="mt125">
      {reservation.map(item => <AdminMngUserTableRow key={item.id} data={item} />) || null}
      {/* <Link to={`${path}/UserReverseInfo`}>
        <AdminMngUserTableRow />
      </Link> */}
    </div>
  );
}

export default UserManageTable;