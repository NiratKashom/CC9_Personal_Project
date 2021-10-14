import React from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';


function PaymentMethod() {

  return (
    <div className="mr1 flex3 payment">
      <ContainerWithHeadline headline="payment">
        <p className="fz15 mb125">Upload Your Payslip</p>
        <div
          className="upload-payslip container-with-bg txtcenter "
        >
          <span className="material-icons-outlined">
            file_upload
          </span>
          <p className="fz15 mb125 ttcap">You can also upload Your Payslip by</p>

          <div className="pt1 pb15">
            <label className="pointer btn-blue fz15">click here
              <input type="file" />
            </label>
          </div>
        </div>
      </ContainerWithHeadline>
    </div>
  );
}

export default PaymentMethod;
