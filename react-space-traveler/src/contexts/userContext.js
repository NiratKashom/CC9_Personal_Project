import { createContext, useState, useContext } from 'react';
import axios from '../config/axios';
import { useHistory } from 'react-router-dom';
import { setToken, removeToken, user as initialUser } from '../services/localStorageService';
import jwtDecode from 'jwt-decode';
import { validateContext } from './validateContext';



const userContext = createContext();


const UserProvider = ({ children }) => {
  const { setErrLogin, setErrRegister } = useContext(validateContext);
  const history = useHistory();
  const [user, setUser] = useState(initialUser);


  const hdlSubmitLogin = async (e, loginInput) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/login`, loginInput);
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      setErrLogin('');
      history.push('/');

    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrLogin('invalid email or password');
      }
    }
  };

  const hdlSubmitRegister = async (e, regInfo) => {
    e.preventDefault();
    try {
      await axios.post(`/register`, regInfo);
      window.alert('register success');
      history.push('/login');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrRegister('email has used');
      }
    }
  };

  const hdlLogout = () => {
    removeToken();
    setUser(null);
    history.push('/login');
  };

  return <userContext.Provider value={{
    user, setUser,
    hdlSubmitLogin, hdlSubmitRegister,
    hdlLogout
  }}>
    {children}
  </userContext.Provider>;
};

export { userContext, UserProvider };