import { createContext, useState } from 'react';
import axios from '../config/axios';
import { useHistory } from 'react-router-dom';

const flightContext = createContext();

const FlightProvider = ({ children }) => {
  const history = useHistory();
  const [currentFlight, setCurrentFlight] = useState('');
  const [flightForCreate, setFlightForCreate] = useState({ departure: 'earth' });


  const hdlChangeEditFlight = (e) => {
    const getState = currentFlight ? setCurrentFlight : setFlightForCreate;
    let ISODate;
    if (e.target.type === 'date') ISODate = new Date(e.target.value).toISOString();
    switch (e.target.name) {
      case 'departureDate':
        getState(cur => ({ ...cur, departureDate: ISODate }));
        break;
      case 'arrivalDate':
        getState(cur => ({ ...cur, arrivalDate: ISODate }));
        break;
      case 'returnDate':
        getState(cur => ({ ...cur, returnDate: ISODate }));
        break;
      case 'destination':
        getState(cur => ({ ...cur, destination: e.target.value }));
        break;
      default:
        break;
    }
  };

  const hdlClickGoBackAndClearCurFlight = () => {
    history.goBack();
    setCurrentFlight('');
    setFlightForCreate({ departure: 'earth' });
  };


  // const hdlChangeNewFlight = (e) => {
  //   let ISODate;
  //   if (e.target.type === 'date') ISODate = new Date(e.target.value).toISOString();
  //   switch (e.target.name) {
  //     case 'departureDate':
  //       setFlightForCreate(cur => ({ ...cur, departureDate: ISODate }));
  //       break;
  //     case 'arrivalDate':
  //       setFlightForCreate(cur => ({ ...cur, arrivalDate: ISODate }));
  //       break;
  //     case 'returnDate':
  //       setFlightForCreate(cur => ({ ...cur, returnDate: ISODate }));
  //       break;
  //     case 'destination':
  //       setFlightForCreate(cur => ({ ...cur, destination: e.target.value }));
  //       break;
  //     default:
  //       break;
  //   }
  // };


  const hdlClickSetCurFlightWithId = async (flightId) => {
    try {
      const res = await axios.get(`/schedule-flight/${flightId}`);
      setCurrentFlight(cur => ({ ...cur, ...res.data.flight }));
    } catch (error) {
      console.log(error);
    }
  };

  const hdlSubmitCreateFilght = async e => {
    e.preventDefault();
    try {
      await axios.post(`/schedule-flight/`, flightForCreate);
      history.push('/admin-manage');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


  return <flightContext.Provider value={{
    hdlClickSetCurFlightWithId, currentFlight, setCurrentFlight,
    flightForCreate, setFlightForCreate,
    hdlChangeEditFlight, hdlClickGoBackAndClearCurFlight,
    hdlSubmitCreateFilght

  }}>
    {children}
  </flightContext.Provider>;
};

export { flightContext, FlightProvider };