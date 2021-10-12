import React, { useContext } from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';
import { Link, useHistory } from 'react-router-dom';
import { summaryContext } from '../../contexts/summaryContext';
import { flightContext } from '../../contexts/flightContext';
// import { MOCK_FLIGHT } from '../../temp/MOCK_SHCEDULE_FLIGTH';
import { getFormattedDate } from '../../services/dateService';



function Summary() {
  const history = useHistory();
  const { summary, setSummary, sumPrice, hdlClickDecrStep, hdlClickIncrStep, step } = useContext(summaryContext);
  const { setCurrentFlight, currentFlight } = useContext(flightContext);

  const hdlClickBack = () => {
    setCurrentFlight('');
    setSummary([]);
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

  console.log(summary);

  return (
    <div className="flex1">
      <ContainerWithHeadline headline="summary">
        <div className="summary">
          <div className="flight-detail borderbot mb1 pb1">
            <h2 className="fz125 mb05 ttup">Flight</h2>
            <p className="ttcap">{`${destination} - ${departure} - ${destination}`}</p>
            <p>Depart: {getFormattedDate(departureDate)}</p>
            <p>Arrival: {getFormattedDate(arrivalDate)}</p>
            <p>Return: {getFormattedDate(returnDate)}</p>
          </div>

          <div className="borderbot mb1 pb1">
            {/* each service */}
            <h2 className="fz125 mb05 ttup">Room</h2>
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
            <h2 className="fz125 mb05 ttup">Extra Service</h2>
            {/* {summary?.filter(item => item.type === 'service')
              .map((item, idx) => (
                <div key={idx} className="dflex-jbetween ">
                  <p className="ttcap">{`${item.amount} ${item.name} :`}</p>
                  <p className="fz125">{item.amount * item.price} &#3647;</p>
                </div>
              ))
            } */}
            {/* {summary.extraList.map((item, idx) => (
              <div key={idx} className="dflex-jbetween ">
                <p className="ttcap">{`${item.amount} ${item.extraType} :`}</p>
                <p className="fz125">{item.amount * item.price} &#3647;</p>
              </div>
            ))
            } */}
          </div>

          <p className="fz125 txtend mb125">
            Total Trip :
            <span className="fz15"> {sumPrice} &#3647;</span>
          </p>
          <div className="w100 dflex-jaround">
            <button className="btn-orange fz15 mr15 p05 flex1"
              onClick={hdlClickBack}
            >back</button>
            {step === 3 ? <button onClick={hdlClickIncrStep} className="btn-green fz15 ml15 p05 flex1">Submit</button>
              :
              <Link onClick={hdlClickIncrStep} to={`/schedule-flight/confirm`} className="btn-green fz15 ml15 p05 flex1">next</Link>
            }
          </div>
        </div>
      </ContainerWithHeadline >
    </div >
  );
}

export default Summary;
