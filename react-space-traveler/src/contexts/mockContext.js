import { createContext, } from 'react';

const mockFlightContext = createContext();

const MockFlightProvider = ({ children }) => {
  const MOCK_FLIGHT =
  {
    flightId: 5678,
    departureDate: "03/05/2022 12:34:54",
    arrivalDate: "04/12/2022 13:23:54",
    returnDate: "04/20/2022 23:55:34",
    departureLocation: 'earth',
    destinationLocation: 'mars',
    roomPrice: {
      standard: 5000,
      deluxe: 10000,
      suit: 14000
    },
    extraPrice: {
      insurance: 2444,
      dinner: 5666,
    }
  };

  return <mockFlightContext.Provider value={{ MOCK_FLIGHT }}>
    {children}
  </mockFlightContext.Provider>;
};

export { mockFlightContext, MockFlightProvider };