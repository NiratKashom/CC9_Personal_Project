import React from 'react';
// import PaymentSummary from '../components/payment/PaymentSummary';
import Summary from '../components/roomAndService/Summary';
import PaymentMethod from '../components/payment/PaymentMethod';


function Payment() {
  return (
    <div className="w100 dflex alistart mt125 outline">
      <PaymentMethod />
      <Summary />
      {/* <PaymentSummary /> */}
    </div>
  );
}

export default Payment;
