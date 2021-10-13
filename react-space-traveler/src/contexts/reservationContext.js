import { createContext, useState } from 'react';
import axios from '../config/axios';
import { useHistory } from 'react-router-dom';

const reservationContext = createContext();

const ReservationProvider = ({ children }) => {
  const history = useHistory();
  const [reservation, setReservation] = useState([]);
  const [curReservation, setCurReservation] = useState({});

  const hdlClickSetCurReservation = async (reservavtionId) => {
    try {
      const res = await axios.get(`/reservation/reservationInfo/${reservavtionId}`);
      setCurReservation(cur => ({ ...cur, ...res.data.reservationById }));
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(curReservation);


  // const hdlChangeEditFlight = (e) => {
  //   const getState = currentFlight ? setCurrentFlight : setFlightForCreate;
  //   let ISODate;
  //   if (e.target.type === 'date') ISODate = new Date(e.target.value).toISOString();
  //   switch (e.target.name) {
  //     case 'departureDate':
  //       getState(cur => ({ ...cur, departureDate: ISODate }));
  //       break;
  //     case 'arrivalDate':
  //       getState(cur => ({ ...cur, arrivalDate: ISODate }));
  //       break;
  //     case 'returnDate':
  //       getState(cur => ({ ...cur, returnDate: ISODate }));
  //       break;
  //     case 'destination':
  //       getState(cur => ({ ...cur, destination: e.target.value }));
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const hdlClickGoBackAndClearCurFlight = () => {
  //   history.goBack();
  //   setCurrentFlight('');
  //   setFlightForCreate({ departure: 'earth' });
  // };

  // const hdlClickSetCurFlightWithId = async (flightId) => {
  //   try {
  //     const res = await axios.get(`/schedule-flight/${flightId}`);
  //     setCurrentFlight(cur => ({ ...cur, ...res.data.flight }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const hdlSubmitCreateFilght = async e => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(`/schedule-flight/`, flightForCreate);
  //     history.push('/admin-manage');
  //     setCurrentFlight('');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const hdlSubmitEditFilght = async e => {
  //   e.preventDefault();
  //   try {
  //     await axios.put(`/schedule-flight/${currentFlight.id}`, currentFlight);
  //     window.alert(`update success flightId: ${currentFlight.id}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const hdlDeleteFilght = async () => {
  //   try {
  //     await axios.delete(`/schedule-flight/${currentFlight.id}`);
  //     window.alert(`Flight: ${currentFlight.id} Delete success`);
  //     history.push('/admin-manage');
  //     setCurrentFlight('');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };




  return <reservationContext.Provider value={{
    reservation, setReservation, hdlClickSetCurReservation,
    curReservation, setCurReservation
  }}>
    {children}
  </reservationContext.Provider>;
};

export { reservationContext, ReservationProvider };