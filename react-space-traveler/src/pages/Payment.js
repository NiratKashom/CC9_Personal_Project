import React from 'react';
import PaymentSummary from '../components/payment/PaymentSummary';
import PaymentMethod from '../components/payment/PaymentMethod';


function Payment() {
  return (
    <div className="w100 dflex alistart mt125 outline">
      <PaymentMethod />
      <PaymentSummary />
    </div>
  );
}

export default Payment;
