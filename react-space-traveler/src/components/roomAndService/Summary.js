import React, { useContext } from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';
import { Link, useHistory } from 'react-router-dom';
import { summaryContext } from '../../contexts/summaryContext';
import { flightContext } from '../../contexts/flightContext';
import { validateContext } from '../../contexts/validateContext';
import { getFormattedDate } from '../../services/dateService';

function Summary() {
  const history = useHistory();
  const { hdlSubmitCreateReservation, summary, setSummary, sumPrice, hdlClickDecrStep, hdlClickIncrStep, step } = useContext(summaryContext);
  const { setCurrentFlight, currentFlight } = useContext(flightContext);
  const { validateBeforeConfirm, errSummary, setErrSummary } = useContext(validateContext);

  const hdlClickBack = () => {
    setCurrentFlight('');
    setSummary([]);
    setErrSummary('');
    hdlClickDecrStep();
    history.goBack();
  };

  const { destination,
    departure,
    departureDate,
    returnDate,
    arrivalDate,
    id
  } = currentFlight;

  const hdlClickSubmit = () => {
    hdlSubmitCreateReservation();
    hdlClickIncrStep();
    setErrSummary('');
    // 
  };

  const hdlClickBeforeConfirm = () => {
    if (validateBeforeConfirm(summary)) {
      hdlClickIncrStep();
      history.push('/schedule-flight/confirm');
    }
  };

  return (
    <div className="flex1">
      <ContainerWithHeadline headline="summary">
        <div className="summary">
          <div className="flight-detail borderbot mb1 pb1">
            <h2 className="fz125 mb05 ttup">Flight :</h2>
            <p className="txtwhite80 ">Flight ID: <span>{id}</span> </p>
            <p className="ttcap fz125">{`${departure} - ${destination} - ${departure}`}</p>
            <p className="txtwhite80 ">Depart: <span>{getFormattedDate(departureDate)}</span></p>
            <p className="txtwhite80 ">Arrival: <span>{getFormattedDate(arrivalDate)}</span></p>
            <p className="txtwhite80 ">Return: <span>{getFormattedDate(returnDate)}</span></p>
          </div>

          <div className="borderbot mb1 pb1">
            {/* each service */}
            <h2 className="fz125 mb05 ttup">Room :</h2>
            {summary?.filter(item => item.type === 'room')
              .map((item, idx) => (
                <div key={idx} className="dflex-jbetween ">
                  <p className="ttcap">{`${item.amount} ${item.name} :`}</p>
                  <p className="fz125">{item.amount * item.price} &#3647;</p>
                </div>
              ))
            }
          </div>

          <div className="borderbot mb1 pb1">
            {/* each service */}
            <h2 className="fz125 mb05 ttup">Extra Service :</h2>
            {summary?.filter(item => item.type === 'extra')
              .map((item, idx) => (
                <div key={idx} className="dflex-jbetween ">
                  <p className="ttcap">{`${item.amount} ${item.name} :`}</p>
                  <p className="fz125">{item.amount * item.price} &#3647;</p>
                </div>
              ))
            }
          </div>

          <p className="fz125 txtend mb1">
            Total Trip :
            <span className="fz15"> {sumPrice} &#3647;</span>
          </p>
          {errSummary && <p className="ttcap red-box-outline fz125 mb1">{errSummary}</p>}
          <div className="w100 dflex-jaround">
            <button className="btn-orange fz15 mr15 p05 flex1"
              onClick={hdlClickBack}
            >back</button>
            {step === 3 ? <button onClick={hdlClickSubmit} className="btn-green fz15 ml15 p05 flex1">Submit</button>
              :
              <button onClick={hdlClickBeforeConfirm} className="btn-green fz15 ml15 p05 flex1">next</button>
            }
          </div>
        </div>
      </ContainerWithHeadline >
    </div >
  );
}

export default Summary;
