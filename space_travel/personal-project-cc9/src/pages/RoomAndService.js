import React from 'react';
import SelectionSector from '../components/roomAndService/SelectionSector';
import Summary from '../components/roomAndService/Summary';

function RoomAndService() {
  return (
    <div className="w100 dflex alistart">
      <SelectionSector />
      <Summary />
    </div>
  );
}

export default RoomAndService;
