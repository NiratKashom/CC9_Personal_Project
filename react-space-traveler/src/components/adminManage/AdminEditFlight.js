import React, { useContext } from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';
import { flightContext } from '../../contexts/flightContext';
import { validateContext } from '../../contexts/validateContext';
import ScheduleTableRow from '../schedule/ScheduleTableRow';
import ModalWithCloseBtn from '../ModalWithCloseBtn';
import { useHistory } from 'react-router-dom';

function AdminEditFlight() {
  const history = useHistory();
  const {
    currentFlight,
    flightForCreate, setCurrentFlight,
    hdlChangeEditFlight, hdlClickGoBackAndClearCurFlight,
    hdlSubmitCreateFilght, hdlDeleteFilght, hdlSubmitEditFilght
  } = useContext(flightContext);
  const { validateCreateFlight, errCreatFlight } = useContext(validateContext);

  const {
    departureDate,
    arrivalDate,
    returnDate,
    // departure,
    destination,
    id: flightId,
  } = currentFlight;

  const formatDateInput = (dateObj) => {
    if (dateObj) return dateObj.toString().split('T')[0];
    return null;
  };

  const hdlCLickDel = e => {
    e.preventDefault();
    if (window.confirm("Delete Fligth?")) {
      hdlDeleteFilght();
      setCurrentFlight('');
      history.push('/admin-manage');
    };
  };

  const hdlClickCreateFilght = (e) => {
    if (validateCreateFlight(flightForCreate)) {
      hdlSubmitCreateFilght(e);
    }
    return;
  };


  return (
    <div className="flex3">
      <ContainerWithHeadline headline={currentFlight ?
        `edit flight id : ${flightId}` : `create flight`}  >
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
        {errCreatFlight && <p className="red-box-outline txtcenter fz15 mb1">{errCreatFlight}</p>}

        {/* <AdminMngSchdTableRow /> */}
        <ScheduleTableRow data={currentFlight || flightForCreate} />
        <div className="dflex-jbetween">
          <div className="">
            {!currentFlight ? null :
              <button className="btn-red fz125" type="button"
                onClick={hdlCLickDel}
              >delete flight</button>
            }
          </div>
          <div className="dflex w25">
            <button className="fz125 btn-orange mr1 flex1" type="button"
              onClick={hdlClickGoBackAndClearCurFlight}
            >back</button>
            {currentFlight ? <button className="fz125 btn-green flex1"
              onClick={hdlSubmitEditFilght}
            >Edit</button>
              :
              <button className="fz125 btn-green flex1"
                onClick={e => hdlClickCreateFilght(e)}
              >create</button>
            }
          </div>
        </div>
      </ContainerWithHeadline >
    </div >
  );
}

export default AdminEditFlight;
