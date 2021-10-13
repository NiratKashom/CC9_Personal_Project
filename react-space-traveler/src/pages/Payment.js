import React, { useContext } from 'react';
import Summary from '../components/roomAndService/Summary';
import PaymentMethod from '../components/payment/PaymentMethod';
import CompleteBooking from './CompleteBooking';
import { summaryContext } from '../contexts/summaryContext';


function Payment() {
  const { step } = useContext(summaryContext);

  return (
    <div className="w100 dflex alistart mt125">
      <PaymentMethod />
      <Summary />
      {step === 4 ? <CompleteBooking /> : null}

    </div>
  );
}

export default Payment;
