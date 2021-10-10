import { createContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { API_URL } from '../config/env';
import { MOCK_USER } from '../temp/MOCK_USER';


const userContext = createContext();


const UserProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState('');

  const hdlSubmitLogin = async (e, loginInput) => {
    e.preventDefault();
    // console.log(loginInput);
    try {
      const res = await axios.post(`${API_URL}/login'`, loginInput);
      setUser(res.data);
      history.push('/schedule-flight');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('Invalid username or password');
      }
    }


    // const currentUser = MOCK_USER.find(item =>
    //   item.email === input.email
    // );
    // if (currentUser) {
    //   setUser(cur => ({ ...cur, ...currentUser }));
    //   if (currentUser.isAdmin) {
    //     console.log(`ADMIN LOGIN!!`);
    //     history.push('/admin-manage');
    //     return;
    //   }
    //   console.log(`USER LOGIN!!`);
    //   history.push('/schedule-flight');
    //   return;
    // }
    // console.log('email or password is invalid');
  };

  const hdlLogout = () => {
    setUser(null);
    history.push('/login');
  };

  return <userContext.Provider value={{
    user, setUser,
    hdlSubmitLogin, hdlLogout
  }}>
    {children}
  </userContext.Provider>;
};

export { userContext, UserProvider };