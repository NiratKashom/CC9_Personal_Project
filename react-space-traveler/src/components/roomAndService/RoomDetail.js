import React from 'react';
import standardRoomPic from '../../img/standard_room.jpg';


function RoomDetail(props) {
  const { roomPrice, roomType } = props;
  // console.log(roomType);

  return (
    <div className="room-detail mt125 dflex alistart">
      <img src={standardRoomPic} alt="standard_room" />
      <div className="room-detail-text">
        <p className="fz2">{roomPrice[roomType]} &#3647;</p>
        <ul className="p125 mb125 ">
          <li>2 adult</li>
          <li>1 king size bed</li>
          <li>room size 32 sqm</li>
        </ul>
        <p>** Non-smoking rooms, Tea/Coffee Maker in All Rooms, Free WiFi in all areas and Room service **</p>
      </div>

    </div>
  );
}

export default RoomDetail;
