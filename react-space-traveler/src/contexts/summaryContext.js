import { createContext, useState } from 'react';
import axios from '../config/axios';

const summaryContext = createContext();

const SummaryProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  const hdlClickIncrStep = () => setStep(step + 1);
  const hdlClickDecrStep = () => setStep(step - 1);

  const [summary, setSummary] = useState({
    roomList: [

    ],
    extraList: [

    ]
  });

  const sumPrice = summary.roomList.reduce((acc, item) => {
    return acc += item.price * item.amount;
  }, 0) + summary.extraList.reduce((acc, item) => {
    return acc += item.price * item.amount;
  }, 0);

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

  return <summaryContext.Provider value={{
    summary, setSummary, sumPrice,
    step, setStep, hdlClickIncrStep, hdlClickDecrStep,
    hdlClickSetCurFlightWithId, currentFlight, setCurrentFlight,
  }}>
    {children}
  </summaryContext.Provider>;
};

export { summaryContext, SummaryProvider };