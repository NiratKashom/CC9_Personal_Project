import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MOCK_USER } from '../temp/MOCK_USER';

const userContext = createContext();


const UserProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState('');

  const hdlUserLogin = input => {
    const currentUser = MOCK_USER.find(item =>
      item.email === input.email
    );
    if (currentUser) {
      setUser(cur => ({ ...cur, ...currentUser }));
      if (currentUser.isAdmin) {
        console.log(`ADMIN LOGIN!!`);
        history.push('/admin-manage');
        return;
      }
      console.log(`USER LOGIN!!`);
      history.push('/schedule-flight');
      return;
    }
    console.log('email or password is invalid');
  };

  const hdlLogout = () => {
    setUser(cur => '');
    history.push('/login');
  };

  return <userContext.Provider value={{
    user, setUser,
    hdlUserLogin, hdlLogout
  }}>
    {children}
  </userContext.Provider>;
};

export { userContext, UserProvider };