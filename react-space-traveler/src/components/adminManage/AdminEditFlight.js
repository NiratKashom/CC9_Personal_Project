import React, { useContext } from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';
import { flightContext } from '../../contexts/flightContext';
import ScheduleTableRow from '../schedule/ScheduleTableRow';
// import { separateDate, getFormattedDate } from '../../services/dateService';


function AdminEditFlight() {
  const {
    currentFlight,
    flightForCreate,
    hdlChangeEditFlight, hdlClickGoBackAndClearCurFlight,
    hdlSubmitCreateFilght
  } = useContext(flightContext);

  const {
    departureDate,
    arrivalDate,
    returnDate,
    departure,
    destination,
    id: flightId,
  } = currentFlight;

  const formatDateInput = (dateObj) => {
    if (dateObj) return dateObj.toString().split('T')[0];
    return null;
  };

  return (
    <div className="flex3">
      <ContainerWithHeadline headline={currentFlight ?
        `edit flight id : ${currentFlight.id}` : `create flight`}  >
        <form onSubmit={hdlSubmitCreateFilght}>
          <p className="fz15 ttunderline mb1 ttcap">Fight info</p>
          <div className=" dflex-jbetween alistart mb1">
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
                  <option value=''>choose</option>
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

          {/* <div className=" dflex-jbetween alistart mb1">
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
        </div> */}

          {/* <AdminMngSchdTableRow /> */}
          <ScheduleTableRow data={currentFlight || flightForCreate} />
          <div className="dflex-jbetween">
            <div className="">
              {!currentFlight ? null :
                <button className="btn-red fz125" type="button"
                  onClick={() => console.log(`DELETE THIS FLIGHT: ${flightId}`)}
                >delete flight</button>
              }
            </div>
            <div className="dflex w25">
              <button className="fz125 btn-orange mr1 flex1" type="button"
                onClick={hdlClickGoBackAndClearCurFlight}
              >back</button>
              <button className="fz125 btn-green flex1">submit</button>
            </div>
          </div>
        </form>
      </ContainerWithHeadline >
    </div >
  );
}

export default AdminEditFlight;
