import { createContext, useState } from 'react';
import axios from '../config/axios';

const flightContext = createContext();

const FlightProvider = ({ children }) => {




  const [currentFlight, setCurrentFlight] = useState({
    flightId: '',
    departureDate: '',
    arrivalDate: '',
    returnDate: '',
    departureLocation: '',
    destinationLocation: '',
  });


  const hdlClickSetCurFlightWithId = async (flightId) => {
    try {
      const res = await axios.get(`/schedule-flight/${flightId}`);
      setCurrentFlight(cur => ({ ...cur, ...res.data.flight }));
    } catch (error) {
      console.log(error);
    }
  };


  return <flightContext.Provider value={{
    hdlClickSetCurFlightWithId, currentFlight, setCurrentFlight,
  }}>
    {children}
  </flightContext.Provider>;
};

export { flightContext, FlightProvider };