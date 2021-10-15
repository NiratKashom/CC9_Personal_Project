import { createContext, useState } from 'react';
import axios from '../config/axios';
// import { useHistory } from 'react-router-dom';
import { getToken } from '../services/localStorageService';

const summaryContext = createContext();

const SummaryProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  const hdlClickIncrStep = () => setStep(step + 1);
  const hdlClickDecrStep = () => setStep(step - 1);

  const [summary, setSummary] = useState([]);
  const [payslip, setPayslip] = useState(null);
  const [reserveInfoForSubmit, setReserveInfoForSubmit] = useState({});

  const sumPrice = summary.reduce((acc, item) => {
    return acc += item.price * item.amount;
  }, 0);

  const calcPrice = (destination, price) => {
    switch (destination) {
      case 'mars':
        return price * 1.5;
      case 'jupiter':
        return price * 3;
      default:
        return price;
    }
  };


  // console.log(reserveInfoForSubmit);
  const hdlSubmitCreateReservation = async () => {

    try {
      const formData = new FormData();
      formData.append("flightId", reserveInfoForSubmit.flightId);
      formData.append("passengerId", reserveInfoForSubmit.passengerId);
      formData.append("orderList", JSON.stringify(reserveInfoForSubmit.orderList));
      formData.append("payslip", payslip);

      await axios.post(`/reservation`, formData, {
        headers: { authorization: 'Bearer ' + getToken() }
      });
      hdlClickIncrStep();
      setSummary([]);
      setReserveInfoForSubmit([]);
      setPayslip(null);
    } catch (error) {
      console.log(error);
    }
  };

  return <summaryContext.Provider value={{
    summary, setSummary, sumPrice, calcPrice,
    step, setStep, hdlClickIncrStep, hdlClickDecrStep,
    payslip, setPayslip,
    reserveInfoForSubmit, setReserveInfoForSubmit, hdlSubmitCreateReservation
  }}>
    {children}
  </summaryContext.Provider>;
};

export { summaryContext, SummaryProvider };