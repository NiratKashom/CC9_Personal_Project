import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import UserManage from './pages/UserManage';
import AdminManage from './pages/AdminManage';
import { MockFlightProvider } from './contexts/mockContext';
import { UserProvider } from './contexts/userContext';
import { SummaryProvider } from './contexts/summaryContext';
import { ServiceProvider } from './contexts/serviceContext';


function App() {
  return (
    <BrowserRouter>

      <UserProvider>
        <MockFlightProvider>
          <div className="App">
            <Navbar />

            <Switch>

              <Route path="/login"><Login /></Route>
              <Route path="/register"><Register /></Route>
              <Route path="/user-manage"><UserManage /></Route>
              <Route path="/home"><Home /></Route>
              <SummaryProvider>
                <ServiceProvider>
                  <Route path="/admin-manage"><AdminManage /></Route>
                  <Route path="/schedule-flight"><Schedule /></Route>
                </ServiceProvider>
              </SummaryProvider>


              <Route path="*">
                <p> 404 page not found</p>
              </Route>
            </Switch>

          </div>
        </MockFlightProvider>
      </UserProvider>

    </BrowserRouter>

  );
}

export default App;