import { createContext, useState, useEffect } from 'react';
import axios from '../config/axios';
import { getToken } from '../services/localStorageService';


const serviceContext = createContext();

const ServiceProvider = ({ children }) => {
  const [serviceList, setserviceList] = useState([]);

  useEffect(() => {
    axios.get(`/service`, {
      headers: { authorization: 'Bearer ' + getToken() }
    })
      .then(res => {
        setserviceList(res.data.services);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <serviceContext.Provider value={{ serviceList }}>
    {children}
  </serviceContext.Provider>;
};

export { ServiceProvider, serviceContext };