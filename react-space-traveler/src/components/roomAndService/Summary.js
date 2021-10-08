import React, { useContext } from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';
import { Link, useHistory } from 'react-router-dom';
import { summaryContext } from '../../contexts/summaryContext';
import { MOCK_FLIGHT } from '../../temp/MOCK_SHCEDULE_FLIGTH';
import { getFormattedDate } from '../../services/dateService';



function Summary() {
  const history = useHistory();
  const { summary, sumPrice, hdlClickDecrStep, hdlClickIncrStep, step, setCurrentFlight } = useContext(summaryContext);

  const hdlClickBack = () => {
    hdlClickDecrStep();
    history.goBack();
  };

  return (
    <div className="flex1">
      <ContainerWithHeadline headline="summary">
        <div className="summary">
          <div className="flight-detail borderbot mb1 pb1">
            <h2 className="fz125 mb05 ttup">Flight</h2>
            <p className="ttcap">{`${MOCK_FLIGHT[0].departureLocation} - ${MOCK_FLIGHT[0].destinationLocation} - ${MOCK_FLIGHT[0].departureLocation}`}</p>
            <p>Depart: {getFormattedDate(MOCK_FLIGHT[0].departureDate)}</p>
            <p>Arrival: {getFormattedDate(MOCK_FLIGHT[0].arrivalDate)}</p>
            <p>Return: {getFormattedDate(MOCK_FLIGHT[0].returnDate)}</p>
          </div>

          <div className="borderbot mb1 pb1">
            {/* each service */}
            <h2 className="fz125 mb05 ttup">Room</h2>
            {summary.roomList.map((item, idx) => (
              <div key={idx} className="dflex-jbetween ">
                <p className="ttcap">{`${item.amount} ${item.roomType} room :`}</p>
                <p className="fz125">{item.amount * item.price} &#3647;</p>
              </div>
            ))
            }
          </div>

          <div className="borderbot mb1 pb1">
            {/* each service */}
            <h2 className="fz125 mb05 ttup">Extra Service</h2>
            {summary.extraList.map((item, idx) => (
              <div key={idx} className="dflex-jbetween ">
                <p className="ttcap">{`${item.amount} ${item.extraType} :`}</p>
                <p className="fz125">{item.amount * item.price} &#3647;</p>
              </div>
            ))
            }

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
