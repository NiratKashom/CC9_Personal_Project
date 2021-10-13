import React, { useContext, useEffect } from 'react';
import AdminMngUserTableRow from '../adminManage/AdminMngUserTableRow';
import { reservationContext } from '../../contexts/reservationContext';
import { userContext } from '../../contexts/userContext';
import { getToken } from '../../services/localStorageService';
import axios from 'axios';

function UserManageTable({ reserveFilter }) {
  const { reservation, setReservation, trigger } = useContext(reservationContext);
  const { user } = useContext(userContext);

  useEffect(() => {
    if (user?.isAdmin) {
      axios.get('/reservation', {
        headers: { authorization: 'Bearer ' + getToken() }
      })
        .then(res => {
          setReservation(res.data.allReservation);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios.get(`/reservation/${user.id}`, {
        headers: { authorization: 'Bearer ' + getToken() }
      })
        .then(res => {
          setReservation(res.data.reserveByUser);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [trigger]);

  const filteredReservation = reservation.filter((item) => (
    item.status === reserveFilter))
    .map(item => <AdminMngUserTableRow key={item.id} data={item} />);

  return (
    < div className="mt125" >
      {reserveFilter ? filteredReservation :
        reservation.map(item => <AdminMngUserTableRow key={item.id} data={item} />)}
    </div>
  );
}

export default UserManageTable;