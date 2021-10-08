import React, { useContext } from 'react';
import Summary from '../components/roomAndService/Summary';
import PaymentMethod from '../components/payment/PaymentMethod';
import CompleteBooking from './CompleteBooking';
import { summaryContext } from '../contexts/summaryContext';


function Payment() {
  const { step, summary } = useContext(summaryContext);

  console.log(summary);

  return (
    <div className="w100 dflex alistart mt125 outline">
      <PaymentMethod />
      <Summary />
      {/* <PaymentSummary /> */}
      {step === 4 ? <CompleteBooking /> : null}

    </div>
  );
}

export default Payment;
