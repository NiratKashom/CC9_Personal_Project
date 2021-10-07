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
          <button type="button"
            className="ttcap btn-blue fz15 mb1"
          >
            click here
          </button>
        </div>
      </ContainerWithHeadline>
    </div>
  );
}

export default PaymentMethod;
