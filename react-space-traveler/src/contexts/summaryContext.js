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
        amount: 3,
        price: 30000
      },
      {
        roomType: 'deluxe',
        amount: 2,
        price: 42000
      },
      {
        roomType: 'suit',
        amount: 1,
        price: 50000
      }
    ],
    extraList: [

    ]
  });

  const sumPrice = summary.roomList.reduce((acc, item) => {
    return acc += item.price * item.amount;
  }, 0) + summary.extraList.reduce((acc, item) => {
    return acc += item.price * item.amount;
  }, 0);

  return <summaryContext.Provider value={{ summary, setSummary, sumPrice }}>
    {children}
  </summaryContext.Provider>;
};

export { summaryContext, SummaryProvider };