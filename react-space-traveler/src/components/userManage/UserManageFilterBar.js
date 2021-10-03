import React, { useState } from 'react';
import ContainerWithHeadline from '../ContainerWithHeadline';


function UserManageFilterBar() {
  const [filterStatus, setFilterStatus] = useState('');

  console.log(filterStatus);

  return (
    <div className="dflex-jend ">
      <div className="dflex w45 ">
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
  );
}

export default UserManageFilterBar;
