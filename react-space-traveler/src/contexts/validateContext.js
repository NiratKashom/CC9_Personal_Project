import { createContext, useState } from 'react';
import axios from '../config/axios';
import { useHistory } from 'react-router-dom';
import validator from 'validator';


const validateContext = createContext();

const ValidateProvider = ({ children }) => {
  const [errLogin, setErrLogin] = useState('');
  const [errRegister, setErrRegister] = useState('');
  const [errSummary, setErrSummary] = useState('');

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
    console.log(summary);
    console.log(summary.map(item => item.type === 'room').length);
    if (summary.map(item => item.type === 'room').length === 0) return setErrSummary('please select at least 1 room');
    setErrSummary('');
    return true;
  };

  return <validateContext.Provider value={{
    errLogin, setErrLogin, validateLogin,
    errRegister, setErrRegister, validateRegister,
    validateBeforeConfirm, errSummary, setErrSummary
  }}>
    {children}
  </validateContext.Provider>;
};

export { validateContext, ValidateProvider };