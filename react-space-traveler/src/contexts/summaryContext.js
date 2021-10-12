import { createContext, useState } from 'react';
import axios from '../config/axios';

const summaryContext = createContext();

const SummaryProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  const hdlClickIncrStep = () => setStep(step + 1);
  const hdlClickDecrStep = () => setStep(step - 1);

  const [summary, setSummary] = useState([]);

  // const sumPrice = summary.roomList.reduce((acc, item) => {
  //   return acc += item.price * item.amount;
  // }, 0) + summary.extraList.reduce((acc, item) => {
  //   return acc += item.price * item.amount;
  // }, 0);


  return <summaryContext.Provider value={{
    summary, setSummary,
    // sumPrice,
    step, setStep, hdlClickIncrStep, hdlClickDecrStep,
  }}>
    {children}
  </summaryContext.Provider>;
};

export { summaryContext, SummaryProvider };