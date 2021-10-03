import './App.css';
import './sizeAndSpace.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import UserManage from './pages/UserManage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Login />
      <Register /> */}
      <Schedule />
      <UserManage />
    </div>
  );
}

export default App;
