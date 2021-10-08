import React, { useContext, useState } from 'react';
import SelectTypeRoom from './SelectTypeRoom';
import RoomDetail from './RoomDetail';
import RoomAmountUpdate from './RoomAmountUpdate';
import { summaryContext } from '../../contexts/summaryContext';


function RoomSelection() {
  const { currentFlight } = useContext(summaryContext);
  const [roomType, setRoomType] = useState('standard');
  console.log(currentFlight);
  return (
    <div className="container-with-bg mb125 p2">
      <SelectTypeRoom setRoomType={setRoomType} />
      <RoomDetail roomPrice={currentFlight.roomPrice} roomType={roomType} />
      <RoomAmountUpdate roomPrice={currentFlight.roomPrice} roomType={roomType} />
    </div >
  );
}

export default RoomSelection;
