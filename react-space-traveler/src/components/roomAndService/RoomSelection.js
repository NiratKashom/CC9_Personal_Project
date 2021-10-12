import React, { useContext, useState } from 'react';
import SelectTypeRoom from './SelectTypeRoom';
import RoomDetail from './RoomDetail';
import RoomAmountUpdate from './RoomAmountUpdate';
// import { summaryContext } from '../../contexts/summaryContext';
import { flightContext } from '../../contexts/flightContext';
import { serviceContext } from '../../contexts/serviceContext';


function RoomSelection() {
  const { currentFlight } = useContext(flightContext);
  const { serviceList } = useContext(serviceContext);
  const [roomType, setRoomType] = useState('standard');

  const roomList = serviceList.filter(item => item.serviceType === 'room');

  const selectedRoom = roomList.find(item => {
    return item.name.split('_')[0] === roomType;
  });

  return (
    <div className="container-with-bg mb125 p2">
      <SelectTypeRoom setRoomType={setRoomType} />
      <RoomDetail selectedRoom={selectedRoom} roomType={roomType} />
      <RoomAmountUpdate selectedRoom={selectedRoom} />
    </div >
  );
}

export default RoomSelection;
