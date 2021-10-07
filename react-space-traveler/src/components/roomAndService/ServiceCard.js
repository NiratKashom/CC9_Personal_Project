import React from 'react';

function ServiceCard(props) {
  const { title, description, icon, value } = props.data;
  console.log(props.price[value]);


  return (
    <div className="service-card container-with-bg p1 mx15 flex1 txtcenter">
      <p className="fz15 ttcap">{title}</p>
      <span className="material-icons-outlined my1">
        {icon}
      </span>
      <p className="mb05">
        {description}
      </p>
      {/* <p className="fz15 ttcap">{`${props.price[value]}`} &#3647; </p> */}
      <div className="dflex-jcenter">
        <p className="fz15 ttcap mr1">{`${props.price[value]}`} &#3647; </p>
        <select className="fz125 p05 mr1">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        {/* <button className="btn-blue fz125 p05">update</button> */}
      </div>
    </div>
  );
}

export default ServiceCard;
