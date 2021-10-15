import React, { useContext } from 'react';
import { flightContext } from '../../contexts/flightContext';
import { summaryContext } from '../../contexts/summaryContext';
import standartPic from '../../img/standard.jpg';
import deluxePic from '../../img/deluxe.jpg';
import suitePic from '../../img/suite.jpg';
// import { reformatName } from '../../services/dateService';



function RoomDetail(props) {
  const { selectedRoom, roomType } = props;
  const { calcPrice } = useContext(summaryContext);
  const { currentFlight } = useContext(flightContext);

  // const picRoom = (roomType) => {
  //   switch (roomType) {
  //     case 'standard':
  //       return standartPic;
  //     case 'deluxe':
  //       return deluxePic;
  //     case 'suite':
  //       return suitePic;
  //     default:
  //       return;
  //   }
  // };


  return (
    <div className="room-detail mt125 dflex alistart">
      {/* <img src={
        roomType = 'standart' ? standartPic : roomType = 'deluxe' ? deluxePic : suitePic
      } alt="standard_room" /> */}
      <img src={selectedRoom.description} alt="standard_room" />
      <div className="room-detail-text">
        <p className="fz2">{calcPrice(currentFlight.destination, selectedRoom.price)} &#3647;</p>
        <ul className="p125 mb125 ">
          <li>2 adult</li>
          <li>1 king size bed</li>
          <li>room size 32 sqm</li>
        </ul>
        {/* <p className="w100">{selectedRoom.description}</p> */}
        {/* <p>** Non-smoking rooms, Tea/Coffee Maker in All Rooms, Free WiFi in all areas and Room service **</p> */}
      </div>

    </div>
  );
}

export default RoomDetail;
