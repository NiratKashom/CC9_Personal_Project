import React from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';


function ServiceSelection() {
  return (
    <>
      <ContainerWithHeadline headline="Extra Service"
        addClass="dflex-jaround"
      >
        <div className="container-with-bg mr1 flex1">
          <h2>Dinner buffet coupon</h2>
          <span class="material-icons-outlined">
            dinner_dining
          </span>
          <p>Enjoy all you can eat. You can always enjoy a wonderful evening with your dinner buffet.</p>
          <div class="update">
            <select>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button class="btn-blue">update</button>
          </div>
        </div>
        <div className="container-with-bg flex1">asd</div>
        <div className="container-with-bg flex1">asd</div>
      </ContainerWithHeadline>
    </>
  );
}

export default ServiceSelection;
