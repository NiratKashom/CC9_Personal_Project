import './App.css';
import './sizeAndSpace.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Login />
      <Register />
    </div>
  );
}

export default App;
