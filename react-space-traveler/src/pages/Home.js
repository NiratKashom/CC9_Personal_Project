import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { flightContext } from '../contexts/flightContext';

function Home() {
  const history = useHistory();
  const { setFilterFlight } = useContext(flightContext);

  const hdlChangFilter = (val) => {
    setFilterFlight(val);
    history.push('/schedule-flight');
  };
  return (
    <div className="home-container">
      <h1>welcome travelers</h1>
      <h2>Let's start your journey</h2>
      <div className="home-select-dest">
        <select className="fz125"
          onChange={e => hdlChangFilter(e.target.value)}
        >
          <option value="0">Select your destination</option>
          <option value="moon">Moon</option>
          <option value="mars">Mars</option>
          <option value="jupiter">Jupiter</option>
        </select>
      </div>
    </div >
  );
}

export default Home;
