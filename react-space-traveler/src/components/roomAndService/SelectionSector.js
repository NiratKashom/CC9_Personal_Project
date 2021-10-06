import React from 'react';
import RoomSelection from './RoomSelection';
import ServiceSelection from './ServiceSelection';

function SelectionSector() {
  return (

    <div className="mr1 flex3 ">
      <RoomSelection />
      <ServiceSelection />
    </div>


  );
}

export default SelectionSector;
