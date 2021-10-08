const MOCK_FLIGHT = [
  {
    flightId: '1234',
    departureDate: "09/04/2022 13:00:00",
    arrivalDate: "10/13/2022 10:00:00",
    returnDate: "11/20/2022 22:00:00",
    departureLocation: 'earth',
    destinationLocation: 'moon',
    roomPrice: {
      standard: 200,
      deluxe: 500,
      suite: 3999
    },
    extraPrice: {
      insurance: 190,
      dinner: 200,
      fitness: 400,
    }
  },
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
      suite: 14000
    },
    extraPrice: {
      insurance: 2444,
      dinner: 5666,
      fitness: 8777,
    }
  },
  {
    flightId: '0987',
    departureDate: "12/06/2022 12:34:54",
    arrivalDate: "01/12/2023 13:23:54",
    returnDate: "02/20/2023 23:55:34",
    departureLocation: 'earth',
    destinationLocation: 'jupiter',
    roomPrice: {
      standard: 5000,
      deluxe: 10000,
      suite: 14000
    },
    extraPrice: {
      insurance: 2444,
      dinner: 5666,
      fitness: 8777,
    }
  }
];

export { MOCK_FLIGHT };

