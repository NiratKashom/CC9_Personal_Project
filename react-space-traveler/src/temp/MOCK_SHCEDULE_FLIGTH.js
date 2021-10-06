const MOCK_FLIGHT = [
  {
    flightId: 1234,
    departureDate: "09/04/2022 13:00:00",
    arrivalDate: "10/13/2022 10:00:00",
    returnDate: "11/20/2022 22:00:00",
    departureLocation: 'earth',
    destinationLocation: 'moon',
    roomPrice: {
      standart: 3000,
      deluxe: 5000,
      suit: 39999
    },
    extraPrice: {
      insurance: 3400,
      dinner: 2342,
      fitness: 34256,
    }
  },
  {
    flightId: 5678,
    departureDate: "03/05/2022 12:34:54",
    arrivalDate: "04/12/2022 13:23:54",
    returnDate: "04/20/2022 23:55:34",
    departureLocation: 'earth',
    destinationLocation: 'mars',
    roomPrice: {
      standart: 5000,
      deluxe: 10000,
      suit: 14000
    },
    extraPrice: {
      insurance: 2444,
      dinner: 5666,
      fitness: 8777,
    }
  }
];

export { MOCK_FLIGHT };

