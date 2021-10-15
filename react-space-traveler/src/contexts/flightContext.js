import { createContext, useState, useContext } from 'react';
import axios from '../config/axios';
import { useHistory } from 'react-router-dom';
import { getToken } from '../services/localStorageService';
import { validateContext } from '../contexts/validateContext';

const flightContext = createContext();

const FlightProvider = ({ children }) => {
  const { validateCreateFlight, setErrCreatFlight } = useContext(validateContext);
  const history = useHistory();
  const [currentFlight, setCurrentFlight] = useState('');
  const [flightForCreate, setFlightForCreate] = useState({ departure: 'earth', destination: '' });
  const [filterFlight, setFilterFlight] = useState('');
  const [flightTrigger, setFlightTrigger] = useState(false);

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
    setErrCreatFlight('');
    setCurrentFlight('');
    setFlightForCreate({ departure: 'earth', destination: '' });
  };

  const hdlClickSetCurFlightWithId = async (flightId) => {
    try {
      const res = await axios.get(`/schedule-flight/${flightId}`, {
        headers: { authorization: 'Bearer ' + getToken() }
      });
      setCurrentFlight(cur => ({ ...cur, ...res.data.flight }));
    } catch (error) {
      console.log(error);
    }
  };

  const hdlSubmitCreateFilght = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/schedule-flight/`, flightForCreate, {
        headers: { authorization: 'Bearer ' + getToken() }
      });
      history.push('/admin-manage');
      setCurrentFlight('');
    } catch (error) {
      console.log(error);
    }
  };


  const hdlSubmitEditFilght = async e => {
    e.preventDefault();
    try {
      await axios.put(`/schedule-flight/${currentFlight.id}`, currentFlight, {
        headers: { authorization: 'Bearer ' + getToken() }
      });
      // window.alert(`update success flightId: ${currentFlight.id}`);
      history.push('/admin-manage');
    } catch (error) {
      console.log(error);
    }
  };

  const hdlDeleteFilght = async () => {
    try {
      await axios.delete(`/schedule-flight/${currentFlight.id}`, {
        headers: { authorization: 'Bearer ' + getToken() }
      });

    } catch (error) {
      console.log(error);
      history.push('/admin-manage');
    }
    setCurrentFlight('');
    history.push('/admin-manage');
  };


  return <flightContext.Provider value={{
    hdlClickSetCurFlightWithId, currentFlight, setCurrentFlight,
    flightForCreate, setFlightForCreate,
    hdlChangeEditFlight, hdlClickGoBackAndClearCurFlight,
    hdlSubmitCreateFilght, hdlDeleteFilght, hdlSubmitEditFilght,
    filterFlight, setFilterFlight

  }}>
    {children}
  </flightContext.Provider>;
};

export { flightContext, FlightProvider };