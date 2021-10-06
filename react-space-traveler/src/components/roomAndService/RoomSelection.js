import React from 'react';
import SelectTypeRoom from './SelectTypeRoom';
import RoomDetail from './RoomDetail';
import RoomAmountUpdate from './RoomAmountUpdate';
import { MOCK_FLIGHT } from '../../temp/MOCK_SHCEDULE_FLIGTH';


function RoomSelection() {
  return (
    <div className="container-with-bg mb125 p2">
      <SelectTypeRoom />
      <RoomDetail />
      <RoomAmountUpdate />
    </div >
  );
}

export default RoomSelection;
