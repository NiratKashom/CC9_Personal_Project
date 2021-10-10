import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContainerWithHeadline from '../ContainerWithHeadline';
import { summaryContext } from '../../contexts/summaryContext';
import ScheduleTableRow from '../schedule/ScheduleTableRow';


function AdminEditFlight() {
  const history = useHistory();
  const { currentFlight, setCurrentFlight } = useContext(summaryContext);

  const hdlClickGoBackAndClearCurFlight = () => {
    history.goBack();
    setCurrentFlight('');
  };


  return (
    <div className="flex3">
      <ContainerWithHeadline headline={currentFlight ?
        `edit flight id : ${currentFlight.flightId}` : `create flight`}  >
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
              <label htmlFor="">destination</label>
              <select name="" id="">
                <option value="">moon</option>
                <option value="">mars</option>
                <option value="">jupiter</option>
              </select>
            </div>

          </div>

          <div className=" flex1">
            <div className="dflex-jbetween mb1">
              <label htmlFor="">Departure Date</label>
              <input type="date" name="" id="" />
            </div>
            <div className="dflex-jbetween mb1">
              <label htmlFor="">arrival Date</label>
              <input type="date" name="" id="" />
            </div>
            <div className="dflex-jbetween">
              <label htmlFor="">return Date</label>
              <input type="date" name="" id="" />
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
            <div className="dflex-jbetween">
              <label htmlFor="">xxxxxxx</label>
              <select name="" id="">
                <option value="">Select</option>
              </select>
            </div>ps
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
            <button className="fz125 btn-orange mr1 flex1 "
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
