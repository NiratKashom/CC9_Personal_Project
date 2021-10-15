import React, { useContext } from 'react';
import { summaryContext } from '../../contexts/summaryContext';
import { flightContext } from '../../contexts/flightContext';
import { reformatName } from '../../services/dateService';


function ServiceCard(props) {
  const { summary, setSummary, calcPrice } = useContext(summaryContext);
  const { currentFlight } = useContext(flightContext);
  const { id, name, description, price, serviceType } = props.data;

  const netPrice = calcPrice(currentFlight.destination, price);

  const hdlChangeAmountRoom = val => {
    const cloneSummary = [...summary];
    let objForUpdate = {
      serviceId: id,
      type: serviceType,
      name: name,
      price: netPrice,
      amount: val,
    };

    // findIndex >>> find = index /not found = -1

    //check hasIdService
    const idxOfServiceHad = cloneSummary.findIndex(
      item => item.serviceId === id);
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

  const split = (description) => {
    return description.split(',');
  };

  return (
    <div className="service-card container-with-bg p1 mx15 flex1 txtcenter">
      <p className="fz15 ttcap">{reformatName(name)}</p>
      <span className="material-icons-outlined my1">
        {split(description)[0]}
      </span>
      <p className="mb05">
        {split(description)[1]}
      </p>
      <div className="dflex-jcenter">
        <p className="fz15 ttcap mr1">
          {netPrice} &#3647;
        </p>
        <select className="fz125 p05 mr1"
          onChange={e => hdlChangeAmountRoom(e.target.value)}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

      </div>
    </div>
  );
}

export default ServiceCard;
