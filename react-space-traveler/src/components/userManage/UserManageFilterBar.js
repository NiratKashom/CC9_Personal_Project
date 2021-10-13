import React, { useState } from 'react';


function UserManageFilterBar({ setReserveFilter }) {

  return (
    <div className="dflex-jend ">
      <div className="dflex w45 ">
        {/*  */}
        <input type="radio" name="status" id="all" value=""
          onChange={e => setReserveFilter(e.target.value)}
          className="dnone"
        />
        <label className=" btn-outline-blue flex1 mr1" htmlFor="all">
          all
        </label>
        {/*  */}
        <input type="radio" name="status" id="approved" value="approved"
          onChange={e => setReserveFilter(e.target.value)}
          className="dnone"
        />
        <label className=" btn-outline-green flex1 mr1" htmlFor="approved">
          approved
        </label>
        {/*  */}
        <input type="radio" name="status" id="pending" value="pending"
          onChange={e => setReserveFilter(e.target.value)}
          className="dnone"
        />
        <label className="btn-outline-orange flex1 mr1" htmlFor="pending">
          pending
        </label>
        {/*  */}
        <input type="radio" name="status" id="rejected" value="rejected"
          onChange={e => setReserveFilter(e.target.value)}
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
