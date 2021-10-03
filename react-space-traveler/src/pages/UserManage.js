import React, { useState } from 'react';
import ContainerWithHeadline from '../components/ContainerWithHeadline';

function UserManage() {
  const [filterStatus, setFilterStatus] = useState('');

  console.log(filterStatus);
  return (
    <div className="w75 px2 m0auto dflex alistart outline">
      {/* usermenu */}
      <div className="flex1 mr1">
        <div className="headline outline">
          <span className="material-icons-outlined">
            account_circle
          </span>
          <h2>Firstname Lastname</h2>
        </div>
        <div className="usermenu-content outline">
          <ul className="usermenu-list">
            <li><a href="./schedule.html" className="active">manage reservation</a></li>
            <li><a href="./schedule.html">back</a></li>
          </ul>
          <ul className="usermenu-button-list">
            <li><button className="btn-red" onclick="location = './login.html'">logout</button></li>
          </ul>
        </div>
      </div>
      {/* end usermeny */}

      {/* manage reservation */}
      <div className="flex3 outline">
        <ContainerWithHeadline headline="manage reservation"  >
          {/* filter bar */}
          <div className="dflex-jend outline">
            <div className="dflex w45 outline">
              <input type="radio" name="status" id="approved" value="approved"
                onChange={e => setFilterStatus(e.target.value)}
                className="dnone"
              />
              <label className=" btn-outline-green flex1 mr1" htmlFor="approved">
                approved
              </label>

              <input type="radio" name="status" id="pending" value="pending"
                onChange={e => setFilterStatus(e.target.value)}
                className="dnone"
              />
              <label className="btn-outline-orange flex1 mr1" htmlFor="pending">
                pending
              </label>

              <input type="radio" name="status" id="rejected" value="rejected"
                onChange={e => setFilterStatus(e.target.value)}
                className="dnone"
              />
              <label className="btn-outline-red flex1" htmlFor="rejected">
                rejected
              </label>

            </div>
          </div>
          {/* end filter bar */}


        </ContainerWithHeadline>
        <div className="container-headline">
          <div className="manage-content">
            {/* <div className="filter-bar">
              <ul>
                <li><a href="#" className="green-outline">approved</a></li>
                <li><a href="#" className="orange-outline">pending</a></li>
                <li><a href="#" className="red-outline">rejected</a></li>
                <li><a href="#" className="wish-outline">wishlist</a></li>
              </ul>
            </div> */}

            <div className="schedule-table">
              <div className="container row schedule-list">
                <div className="id">
                  <p className="id">FLIGHT ID:</p>
                  <p>MON0101220701221300</p>
                  <p className="id">BOOKING ID:</p>
                  <p>D002MON0101220701221300</p>
                </div>
                <div className="date">
                  <div>
                    <p>
                      day 1<br />
                      <span>earth</span> <br />
                      1 january 2022
                    </p>
                  </div>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                </div>
                <div>
                  <p href="#" className="orange-outline">pending</p>
                </div>
                <div className="action">
                  <a href="./userReservationInfo.html">
                    <span className="material-icons-outlined info">
                      description
                    </span>
                  </a>
                  <a href="#">
                    <span className="material-icons-outlined cancel">
                      cancel
                    </span></a>
                </div>
              </div>
              <div className="container row schedule-list">
                <div className="id">
                  <p className="id">FLIGHT ID:</p>
                  <p>MON0101220701221300</p>
                  <p className="id">BOOKING ID:</p>
                  <p>D002MON0101220701221300</p>
                </div>
                <div className="date">
                  <div>
                    <p>
                      day 1<br />
                      <span>earth</span> <br />
                      1 january 2022
                    </p>
                  </div>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                </div>
                <div>
                  <a href="#" className="orange-outline">pending</a>
                </div>
                <div className="action">
                  <a href="#">
                    <span className="material-icons-outlined info">
                      description
                    </span>
                  </a>
                  <a href="#">
                    <span className="material-icons-outlined cancel">
                      cancel
                    </span></a>
                </div>
              </div>
              <div className="container row schedule-list">
                <div className="id">
                  <p className="id">FLIGHT ID:</p>
                  <p>MON0101220701221300</p>
                  <p className="id">BOOKING ID:</p>
                  <p>D002MON0101220701221300</p>
                </div>
                <div className="date">
                  <div>
                    <p>
                      day 1<br />
                      <span>earth</span> <br />
                      1 january 2022
                    </p>
                  </div>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                </div>
                <div>
                  <a href="#" className="orange-outline">pending</a>
                </div>
                <div className="action">
                  <a href="#">
                    <span className="material-icons-outlined info">
                      description
                    </span>
                  </a>
                  <a href="#">
                    <span className="material-icons-outlined cancel">
                      cancel
                    </span></a>
                </div>
              </div>
              <div className="container row schedule-list">
                <div className="id">
                  <p className="id">FLIGHT ID:</p>
                  <p>MON0101220701221300</p>
                  <p className="id">BOOKING ID:</p>
                  <p>D002MON0101220701221300</p>
                </div>
                <div className="date">
                  <div>
                    <p>
                      day 1<br />
                      <span>earth</span> <br />
                      1 january 2022
                    </p>
                  </div>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                </div>
                <div>
                  <a href="#" className="orange-outline">pending</a>
                </div>
                <div className="action">
                  <a href="#">
                    <span className="material-icons-outlined info">
                      description
                    </span>
                  </a>
                  <a href="#">
                    <span className="material-icons-outlined cancel">
                      cancel
                    </span></a>
                </div>
              </div>
              <div className="container row schedule-list">
                <div className="id">
                  <p className="id">FLIGHT ID:</p>
                  <p>MON0101220701221300</p>
                  <p className="id">BOOKING ID:</p>
                  <p>D002MON0101220701221300</p>
                </div>
                <div className="date">
                  <div>
                    <p>
                      day 1<br />
                      <span>earth</span> <br />
                      1 january 2022
                    </p>
                  </div>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                </div>
                <div>
                  <a href="#" className="orange-outline">pending</a>
                </div>
                <div className="action">
                  <a href="#">
                    <span className="material-icons-outlined info">
                      description
                    </span>
                  </a>
                  <a href="#">
                    <span className="material-icons-outlined cancel">
                      cancel
                    </span></a>
                </div>
              </div>
              <div className="container row schedule-list">
                <div className="id">
                  <p className="id">FLIGHT ID:</p>
                  <p>MON0101220701221300</p>
                  <p className="id">BOOKING ID:</p>
                  <p>D002MON0101220701221300</p>
                </div>
                <div className="date">
                  <div>
                    <p>
                      day 1<br />
                      <span>earth</span> <br />
                      1 january 2022
                    </p>
                  </div>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                  <p>
                    day 1<br />
                    <span>earth</span> <br />
                    1 january 2022
                  </p>
                </div>
                <div>
                  <a href="#" className="orange-outline">pending</a>
                </div>
                <div className="action">
                  <a href="#">
                    <span className="material-icons-outlined info">
                      description
                    </span>
                  </a>
                  <a href="#">
                    <span className="material-icons-outlined cancel">
                      cancel
                    </span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end manage reservation */}
    </div >
  );
}

export default UserManage;
