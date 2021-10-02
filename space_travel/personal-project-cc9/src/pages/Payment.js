import React from 'react';
import Summary from '../components/roomAndService/Summary';
import PaymentMethod from '../components/payment/PaymentMethod';


function Payment() {
  return (
    <div className="w100 dflex alistart mt125 outline">
      <PaymentMethod />
      <Summary />
    </div>
  );
}

export default Payment;
