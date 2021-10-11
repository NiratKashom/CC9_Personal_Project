import { createContext, useState, useEffect } from 'react';
import { API_URL } from '../config/env';
import axios from 'axios';

const serviceContext = createContext();

const ServiceProvider = ({ children }) => {
  const [serviceList, setserviceList] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/service`)
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