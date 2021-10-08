import React from 'react';

function Home() {


  return (
    <div className="home-container">
      <h1>welcome travelers</h1>
      <h2>Let's start your journey</h2>
      <div className="home-select-dest">
        <select className="fz125">
          <option value="0">Select your destination</option>
          <option value="1">Moon</option>
          <option value="2">Mars</option>
          <option value="2">Jupiter</option>
        </select>
      </div>
    </div >
  );
}

export default Home;
