import React, { useState, useContext } from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';
import { summaryContext } from '../../contexts/summaryContext';


function PaymentMethod() {
  const { setPayslip, } = useContext(summaryContext);
  const [previewPic, setPreviewPic] = useState('');

  const hdlUploadPayslip = (e) => {
    setPayslip(e.target.files[0]);
    setPreviewPic(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="mr1 flex3 payment">
      <ContainerWithHeadline headline="payment">
        <p className="fz15 mb125">Upload Your Payslip</p>
        <div
          className="upload-payslip container-with-bg txtcenter "
        >
          {previewPic ? <img className="mt1 payImg" src={previewPic} /> :
            <>
              <span className="material-icons-outlined">
                file_upload
              </span>
              <p className="fz15 mb125 ttcap">You can also upload Your Payslip by</p>
            </>
          }

          <div className="my1 pb15">
            <form >
              <label className="pointer btn-blue fz15">click here
                <input type="file" onChange={e => hdlUploadPayslip(e)} />
              </label>
            </form>
          </div>
        </div>
      </ContainerWithHeadline>
    </div>
  );
}

export default PaymentMethod;
