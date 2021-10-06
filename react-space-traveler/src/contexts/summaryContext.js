import { createContext, useState } from 'react';

const summaryContext = createContext();

const SummaryProvider = ({ children }) => {
  const [summary, setSummary] = useState({
    flightId: 1234,
    departureDate: "",
    arrivalDate: "",
    returnDate: "",
    departureLocation: 'earth',
    destinationLocation: 'moon',
    roomList: {
    },
    extraList: {
    }
  });

  return <summaryContext.Provider value={{ summary, setSummary }}>
    {children}
  </summaryContext.Provider>;
};

export { summaryContext, SummaryProvider };