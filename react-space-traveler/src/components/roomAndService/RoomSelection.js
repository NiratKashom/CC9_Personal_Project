import React, { useContext, useState } from 'react';
import SelectTypeRoom from './SelectTypeRoom';
import RoomDetail from './RoomDetail';
import RoomAmountUpdate from './RoomAmountUpdate';
import { mockFlightContext } from '../../contexts/mockContext';


function RoomSelection() {
  const { MOCK_FLIGHT } = useContext(mockFlightContext);
  const [roomType, setRoomType] = useState('standard');
  // console.log(MOCK_FLIGHT.roomPrice.standard);
  return (
    <div className="container-with-bg mb125 p2">
      <SelectTypeRoom setRoomType={setRoomType} />
      <RoomDetail roomPrice={MOCK_FLIGHT.roomPrice} roomType={roomType} />
      <RoomAmountUpdate roomPrice={MOCK_FLIGHT.roomPrice} roomType={roomType} />
    </div >
  );
}

export default RoomSelection;
