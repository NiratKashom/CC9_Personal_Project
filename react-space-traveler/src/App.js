import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import UserManage from './pages/UserManage';
import AdminManage from './pages/AdminManage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Login />
      <Register /> */}
      {/* <Schedule /> */}
      {/* <UserManage /> */}
      <AdminManage />
    </div>
  );
}

export default App;
