import React from 'react';
import SelectionSector from '../components/roomAndService/SelectionSector';
import Summary from '../components/roomAndService/Summary';

function RoomAndService() {

  return (
    <div className="w100 dflex alistart mt125 outline">
      <SelectionSector />
      <Summary />
    </div>
  );
}

export default RoomAndService;
