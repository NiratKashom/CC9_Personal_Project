import React, { useContext } from 'react';
import { summaryContext } from '../../contexts/summaryContext';
import { flightContext } from '../../contexts/flightContext';


function RoomAmountUpdate(props) {
  const { selectedRoom } = props;
  const { summary, setSummary, calcPrice } = useContext(summaryContext);
  const { currentFlight } = useContext(flightContext);

  const netPrice = calcPrice(currentFlight.destination, selectedRoom.price);

  const hdlChangeAmountRoom = val => {
    const cloneSummary = [...summary];
    let objForUpdate = {};
    if (selectedRoom) {
      objForUpdate = {
        serviceId: selectedRoom.id,
        type: selectedRoom.serviceType,
        name: selectedRoom.name,
        price: netPrice,
        amount: val,
      };
    }
    // findIndex >>> find = index /not found = -1

    //check hasIdService
    const idxOfServiceHad = cloneSummary.findIndex(
      item => item.serviceId === selectedRoom.id);
    if (idxOfServiceHad >= 0) {
      if (+val === 0) {
        // console.log(`val = 0 for delete this service`);
        cloneSummary.splice(idxOfServiceHad, 1);
      } else {
        // console.log(`val = ${val} for update amount service`);
        cloneSummary[idxOfServiceHad].amount = +val;
      }
    } else {
      cloneSummary.push(objForUpdate);
    }
    setSummary(cloneSummary);
  };

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
