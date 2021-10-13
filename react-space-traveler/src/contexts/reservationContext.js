import { createContext, useState } from 'react';
import axios from '../config/axios';
import { useHistory } from 'react-router-dom';
import { getToken } from '../services/localStorageService';

const reservationContext = createContext();

const ReservationProvider = ({ children }) => {
  const history = useHistory();
  const [reservation, setReservation] = useState([]);
  const [curReservation, setCurReservation] = useState({});
  const [trigger, setTrigger] = useState(false);

  const hdlChangeEditFlight = async (stat) => {
    console.log(`${stat}`);
    try {
      await axios.put(`/reservation/reservationInfo/${curReservation.id}`,
        { status: stat, reserveId: curReservation.id }, {
        headers: { authorization: 'Bearer ' + getToken() }
      }
      );
      window.alert('update success');
      setTrigger(cur => !cur);
      history.push('/admin-manage/user-reservation');
    } catch (error) {
      console.log(error);
    }
  };

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


  return <reservationContext.Provider value={{
    reservation, setReservation, displayStatus,
    // hdlClickSetCurReservation,
    trigger, setTrigger,
    curReservation, setCurReservation, hdlChangeEditFlight
  }}>
    {children}
  </reservationContext.Provider>;
};

export { reservationContext, ReservationProvider };