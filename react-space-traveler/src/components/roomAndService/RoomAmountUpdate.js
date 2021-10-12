import React, { useContext } from 'react';
import { summaryContext } from '../../contexts/summaryContext';


function RoomAmountUpdate(props) {
  const { selectedRoom, roomType } = props;
  const { summary, setSummary } = useContext(summaryContext);

  const hdlChangeAmountRoom = val => {
    const cloneSummary = [...summary];
    // findIndex >>> find = index /not found = -1
    // cloneSummary.push({ serviceId: 2 });
    let objForUpdate = {
      serviceId: selectedRoom.id,
      type: selectedRoom.serviceType,
      name: selectedRoom.name,
      price: selectedRoom.price,
      amount: 1,
    };

    //check hasIdService
    const idxOfServiceHad = cloneSummary.findIndex(
      item => item.serviceId === selectedRoom.id);
    if (idxOfServiceHad >= 0) {
      if (+val === 0) {
        console.log(`val = 0 for delete this service`);
        cloneSummary.splice(idxOfServiceHad, 1);
      } else {
        console.log(`val = ${val} for update amount service`);
        cloneSummary[idxOfServiceHad].amount = +val;
      }
    } else {
      console.log('push new service');
      cloneSummary.push(objForUpdate);

      //   // let roomSelect = {
      //   //   roomType: '',
      //   //   price: '',
      //   //   amount: ''
      //   // };
      //   // roomSelect.roomType = roomType;
      //   // roomSelect.price = roomPrice[roomType];
      //   // roomSelect.amount = +val;
      //   // cloneSummary.roomList.push(roomSelect);
    }
    setSummary(cloneSummary);

    // const idxRoomTypeHad = cloneSummary.findIndex(item => item.roomType === roomType);
    // if (idxRoomTypeHad >= 0) {
    //   if (+val === 0) {
    //     cloneSummary.roomList.splice(idxRoomTypeHad, 1);
    //   } else {
    //     cloneSummary.roomList[idxRoomTypeHad].amount = +val;
    //   }
    // } else {
    //   // let roomSelect = {
    //   //   roomType: '',
    //   //   price: '',
    //   //   amount: ''
    //   // // };
    //   // // roomSelect.roomType = roomType;
    //   // // roomSelect.price = roomPrice[roomType];
    //   // // roomSelect.amount = +val;
    //   // // cloneSummary.roomList.push(roomSelect);
    // }
    // setSummary(cloneSummary);
  };
  console.log(summary);

  return (
    <div className="room-update w100 dflex-jend">
      <label className="ttcap fz125 mr1">number of rooms :</label>
      <select className="fz125 p05 mr1"
        onChange={e => hdlChangeAmountRoom(e.target.value)}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      {/* <button type="button" className="btn-blue fz125 p05">Update</button> */}
    </div>
  );
};

export default RoomAmountUpdate;
