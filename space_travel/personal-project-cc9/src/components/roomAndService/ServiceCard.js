import React from 'react';

function ServiceCard() {
  return (
    <div className="service-card container-with-bg mx15 flex1 txtcenter">
      <p className="fz15">Dinner buffet coupon</p>
      <span className="material-icons-outlined service-icon">
        dinner_dining
      </span>
      <p className="mb1">
        Enjoy all you can eat. You can always enjoy a wonderful evening with your dinner buffet.</p>

      <div className="update">
        <select className="fz125 p05 mr1">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button class="btn-blue fz125 p05">update</button>
      </div>
    </div>
  );
}

export default ServiceCard;
