import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import UserManage from './pages/UserManage';
import AdminManage from './pages/AdminManage';
import { UserProvider } from './contexts/userContext';
import { SummaryProvider } from './contexts/summaryContext';
import { ServiceProvider } from './contexts/serviceContext';
import { FlightProvider } from './contexts/flightContext';
import { ReservationProvider } from './contexts/reservationContext';
import { ValidateProvider } from './contexts/validateContext';



function App() {
  return (
    <BrowserRouter>
      <ValidateProvider>
        <UserProvider>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/login"><Login /></Route>
              <Route path="/register"><Register /></Route>
              <FlightProvider>
                <Route exact path="/"><Home /></Route>
                <ReservationProvider>
                  <SummaryProvider>
                    <ServiceProvider>
                      <Route path="/user-manage"><UserManage /></Route>
                      <Route path="/admin-manage"><AdminManage /></Route>
                      <Route path="/schedule-flight"><Schedule /></Route>
                    </ServiceProvider>
                  </SummaryProvider>
                </ReservationProvider>
              </FlightProvider>
              <Route path="*">
                <p> 404 page not found</p>
              </Route>
            </Switch>
          </div>
        </UserProvider>
      </ValidateProvider>
    </BrowserRouter>

  );
}

export default App;