import { createContext, } from 'react';

const mockFlightContext = createContext();

const MockFlightProvider = ({ children }) => {
  const MOCK_FLIGHT =
  {
    flightId: '5678',
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
      insurance: 600,
      dinner: 1500,
    }
  };

  const MOCK_USER = {
    id: 'ksdfh389r3r',
    firstName: 'nirat',
    lastName: 'kashom',
    email: 'sadkfj@eamil.com',
    isAdmin: false,
  };

  const MOCK_EXTRA_LIST = [
    {
      title: 'Dinner buffet coupon',
      icon: 'dinner_dining',
      value: 'dinner',
      description: 'Enjoy all you can eat. You can always enjoy a wonderful evening with your dinner buffet.'
    },
    {
      title: 'Travel insurance',
      icon: 'verified_user',
      value: 'insurance',
      description: 'Travel insurance can cover your trip cancellation, travel health insurance, and more.'
    }
  ];


  return <mockFlightContext.Provider value={{ MOCK_FLIGHT, MOCK_USER, MOCK_EXTRA_LIST }}>
    {children}
  </mockFlightContext.Provider>;
};

export { mockFlightContext, MockFlightProvider };