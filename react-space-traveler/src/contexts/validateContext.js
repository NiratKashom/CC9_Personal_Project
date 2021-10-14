import { createContext, useState } from 'react';
import axios from '../config/axios';
import { useHistory } from 'react-router-dom';
import validator from 'validator';


const validateContext = createContext();

const ValidateProvider = ({ children }) => {
  const [errLogin, setErrLogin] = useState('');
  const history = useHistory();

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



  return <validateContext.Provider value={{
    errLogin, setErrLogin, validateLogin
  }}>
    {children}
  </validateContext.Provider>;
};

export { validateContext, ValidateProvider };