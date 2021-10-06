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
    roomList: [
      {
        roomType: 'standard',
        amount: 1,
        price: 2000
      }
    ],
    extraList: {
    }
  });

  return <summaryContext.Provider value={{ summary, setSummary }}>
    {children}
  </summaryContext.Provider>;
};

export { summaryContext, SummaryProvider };