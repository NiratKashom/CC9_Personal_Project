import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ContainerWithHeadline from '../ContainerWithHeadline';
import { summaryContext } from '../../contexts/summaryContext';
import ScheduleTableRow from '../schedule/ScheduleTableRow';
import { separateDate, getFormattedDate } from '../../services/dateService';


function AdminEditFlight() {
  const history = useHistory();
  const { currentFlight, setCurrentFlight } = useContext(summaryContext);

  // const [editFlight, setEditFlight] = useState(
  // );


  const {
    departureDate,
    arrivalDate,
    returnDate,
    departure,
    destination,
    id: flightId,
  } = currentFlight;

  // const cloneFlight = {
  //   departureDate: currentFlight.departureDate,
  //   arrivalDate: currentFlight.arrivalDate,
  //   returnDate: currentFlight.returnDate,
  // };

  const hdlChangeEditFlight = (e) => {
    let ISODate;
    if (e.target.type === 'date') ISODate = new Date(e.target.value).toISOString();
    switch (e.target.name) {
      case 'departureDate':
        setCurrentFlight(cur => ({ ...cur, departureDate: ISODate }));
        break;
      case 'arrivalDate':
        setCurrentFlight(cur => ({ ...cur, arrivalDate: ISODate }));
        break;
      case 'returnDate':
        setCurrentFlight(cur => ({ ...cur, returnDate: ISODate }));
        break;
      case 'destination':
        setCurrentFlight(cur => ({ ...cur, destination: e.target.value }));
        break;
      default:
        break;
    }
  };

  const hdlClickGoBackAndClearCurFlight = () => {
    history.goBack();
    setCurrentFlight('');
  };

  const formatDateInput = (dateObj) => {
    if (dateObj) return dateObj.toString().split('T')[0];
    return null;
  };

  console.log(currentFlight);

  return (
    <div className="flex3">
      <ContainerWithHeadline headline={currentFlight ?
        `edit flight id : ${currentFlight.id}` : `create flight`}  >
        <p className="fz15 ttunderline mb1 ttcap">Fight info</p>
        <div className=" dflex-jbetween alistart borderbot">
          <div className=" w45 mr15">
            <div className="dflex-jbetween mb1 ">
              <label htmlFor="">departure</label>
              <select name="" id="">
                <option value="">earth</option>
              </select>
            </div>
            <div className="dflex-jbetween ">
              <label htmlFor="destination">destination</label>
              <select name="destination" id="destination"
                onChange={e => hdlChangeEditFlight(e)}
                value={destination}
              >
                <option value='moon'>moon</option>
                <option value="mars">mars</option>
                <option value="jupiter">jupiter</option>
              </select>
            </div>

          </div>

          <div className=" flex1">
            <div className="dflex-jbetween mb1">
              <label htmlFor="departureDate">Departure Date</label>
              <input type="date" name="departureDate" id="departureDate"
                onChange={e => hdlChangeEditFlight(e)}
                value={formatDateInput(departureDate)}
              />
            </div>
            <div className="dflex-jbetween mb1">
              <label htmlFor="arrivalDate">arrival Date</label>
              <input type="date" name="arrivalDate" id="arrivalDate"
                onChange={e => hdlChangeEditFlight(e)}
                value={formatDateInput(arrivalDate)}
              />
            </div>
            <div className="dflex-jbetween">
              <label htmlFor="returnDate">return Date</label>
              <input type="date" name="returnDate" id="returnDate"
                onChange={e => hdlChangeEditFlight(e)}
                value={formatDateInput(returnDate)}
              />
            </div>
          </div>
        </div>

        <div className=" dflex-jbetween alistart mb1">
          <div className="w45 mr15">
            <p className="fz15 ttunderline mb1 ttcap">Room rate</p>
            <div className="dflex-jbetween mb1 ">
              <label htmlFor="">standard room</label>
              <select name="" id="">
                <option value="">Select</option>
              </select>
            </div>
            <div className="dflex-jbetween mb1">
              <label htmlFor="">deluxe room</label>
              <select name="" id="">
                <option value="">Select</option>
              </select>
            </div>
            <div className="dflex-jbetween">
              <label htmlFor="">suite room</label>
              <select name="" id="">
                <option value="">Select</option>
              </select>
            </div>
          </div>

          <div className=" flex1">
            <p className="fz15 ttunderline mb1 ttcap">service rate</p>
            <div className="dflex-jbetween mb1 ">
              <label htmlFor="">dinner buffet couple</label>
              <select name="" id="">
                <option value="">Select</option>
              </select>
            </div>
            <div className="dflex-jbetween mb1">
              <label htmlFor="">travel insurance</label>
              <select name="" id="">
                <option value="">Select</option>
              </select>
            </div>
          </div>
        </div>

        {/* <AdminMngSchdTableRow /> */}
        <ScheduleTableRow data={currentFlight} />
        <div className="dflex-jbetween">
          <div className="">
            {currentFlight ? <></> :
              <button className="btn-red fz125">delete flight</button>
            }
          </div>
          <div className="dflex w25">
            <button className="fz125 btn-orange mr1 flex1"
              onClick={hdlClickGoBackAndClearCurFlight}
            >back</button>
            <button className="fz125 btn-green flex1">submit</button>
          </div>
        </div>
      </ContainerWithHeadline >
    </div >
  );
}

export default AdminEditFlight;
