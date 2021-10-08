import React, { useContext } from 'react';
import { summaryContext } from '../../contexts/summaryContext';


function ServiceCard(props) {
  const { summary, setSummary } = useContext(summaryContext);
  const { price } = props;
  const { title, description, icon, extraType } = props.data;

  const hdlChangeAmountExtra = val => {
    const cloneSummary = { ...summary };
    // findIndex >>> find = index /not found = -1
    const idxExtraHad = cloneSummary.extraList.findIndex(item => item.extraType === extraType);
    if (idxExtraHad >= 0) {
      if (+val === 0) {
        cloneSummary.extraList.splice(idxExtraHad, 1);
      } else {
        cloneSummary.extraList[idxExtraHad].amount = +val;
      }
    } else {
      let extraSelect = {
        extraType: '',
        price: '',
        amount: ''
      };
      extraSelect.extraType = extraType;
      extraSelect.price = price[extraType];
      extraSelect.amount = +val;
      cloneSummary.extraList.push(extraSelect);
    }
    setSummary(cloneSummary);
  };

  return (
    <div className="service-card container-with-bg p1 mx15 flex1 txtcenter">
      <p className="fz15 ttcap">{title}</p>
      <span className="material-icons-outlined my1">
        {icon}
      </span>
      <p className="mb05">
        {description}
      </p>
      <div className="dflex-jcenter">
        <p className="fz15 ttcap mr1">{`${price[extraType]}`} &#3647; </p>
        <select className="fz125 p05 mr1"
          onChange={e => hdlChangeAmountExtra(e.target.value)}
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
