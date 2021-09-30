import './App.css';
import './sizeAndSpace.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Schedule from './pages/Schedule';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Login />
      <Register />
      <Schedule />
    </div>
  );
}

export default App;
