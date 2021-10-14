import { createContext, useState } from 'react';
import axios from '../config/axios';
import { useHistory } from 'react-router-dom';
import validator from 'validator';


const validateContext = createContext();

const ValidateProvider = ({ children }) => {
  const [errLogin, setErrLogin] = useState('');
  const [errRegister, setErrRegister] = useState('');
  const [errSummary, setErrSummary] = useState('');
  const [errCreatFlight, setErrCreatFlight] = useState('');

  const validateLogin = (inputLogin) => {
    if (inputLogin.email.trim() === '') {
      setErrLogin('please input email');
      return;
    } else if (!validator.isEmail(inputLogin.email.trim())) {
      setErrLogin('email is invalid format ');
      return;
    } else if (inputLogin.password.trim() === '') {
      setErrLogin('please input password');
      return;
    }
    return true;
  };


  const validateRegister = (reginfo) => {
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
    } = reginfo;

    if (firstName.trim() === '') return setErrRegister('please input First Name');
    if (lastName.trim() === '') return setErrRegister('please input Last Name');
    if (email.trim() === '' || !validator.isEmail(email.trim())) return setErrRegister('email is invalid format');
    if (password.trim() === '') return setErrRegister('please input password');
    if (password !== confirmPassword) return setErrRegister('password did not match');
    setErrRegister('');
    return true;
  };

  const validateBeforeConfirm = (summary) => {
    // console.log(summary);
    // console.log(summary.filter(item => item.type === 'room').length);
    if (summary.filter(item => item.type === 'room').length === 0) return setErrSummary('please select at least 1 room');
    setErrSummary('');
    return true;
  };

  const validateCreateFlight = (flightForCreate) => {
    const dpDate = new Date(flightForCreate.departureDate).getTime();
    const arDate = new Date(flightForCreate.arrivalDate).getTime();
    const rtDate = new Date(flightForCreate.returnDate).getTime();
    if (flightForCreate.destination === '') return setErrCreatFlight('pls input destination');
    if (isNaN(dpDate) || isNaN(arDate) || isNaN(rtDate)) return setErrCreatFlight('dont have date');
    if (dpDate > arDate) return setErrCreatFlight('departureDate must less than arrivalDate');
    if (arDate > rtDate) return setErrCreatFlight('arrivalDate must less than returnDate');
    setErrCreatFlight('');
    return true;
  };

  return <validateContext.Provider value={{
    errLogin, setErrLogin, validateLogin,
    errRegister, setErrRegister, validateRegister,
    validateBeforeConfirm, errSummary, setErrSummary,
    validateCreateFlight, errCreatFlight, setErrCreatFlight
  }}>
    {children}
  </validateContext.Provider>;
};

export { validateContext, ValidateProvider };