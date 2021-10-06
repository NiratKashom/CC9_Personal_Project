import React from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';
import { Link, useHistory } from 'react-router-dom';

function Summary() {
  const history = useHistory();

  const hdlClickGoBack = () => history.goBack();

  return (
    <div className="flex1">
      <ContainerWithHeadline headline="summary">
        <div className="summary">
          <div className="flight-detail borderbot mb1 pb1">
            <h2 className="fz125 mb05 ttup">Flight</h2>
            <p>Earth - Moon - Earth</p>
            <p>Depart: Jan 1, 2022 6: 00 am </p>
          </div>

          <div className="borderbot mb1 pb1">
            {/* each service */}
            <h2 className="fz125 mb05 ttup">Room</h2>
            <div className="dflex-jbetween ">
              <p>1 Standard room :</p>
              <p className="fz125 txtend ">999 &#3647;</p>
            </div>
            <div className="dflex-jbetween">
              <p className="ttcap">2 Deluxe room :</p>
              <p className="fz125 txtend ">3000 &#3647;</p>
            </div>
          </div>

          <div className="borderbot mb1 pb1">
            {/* each service */}
            <h2 className="fz125 mb05 ttup">Extra Service</h2>
            <div className="dflex-jbetween">
              <p>3 Dinner buffet coupon :</p>
              <p className="fz125 txtend ">3000 &#3647;</p>
            </div>
            <div className="dflex-jbetween">
              <p>1 Travel Insurance :</p>
              <p className="fz125 txtend ">12335 &#3647;</p>
            </div>
          </div>

          <p className="fz125 txtend mb125">
            Total Trip :
            <span className="fz15" > 12335 &#3647;</span>
          </p>
          <div className="w100 dflex-jaround">
            <button className="btn-orange fz15 mr15 p05 flex1"
              onClick={hdlClickGoBack}
            >back</button>
            <Link to={`/schedule-flight/confirm`} className="btn-green fz15 ml15 p05 flex1">next</Link>
          </div>
        </div>

      </ContainerWithHeadline >
    </div >
  );
}

export default Summary;
