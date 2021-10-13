import React, { useState, useEffect } from 'react';
import axios from '../../config/axios';
import ScheduleTableRow from './ScheduleTableRow';

function ScheduleTable({ filterFlight }) {
  const [schedule, setSchedule] = useState([]);


  useEffect(() => {
    axios.get('/schedule-flight')
      .then(res => {
        setSchedule(res.data.flights);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const filtered = schedule.filter((data) => (
    data.destination === filterFlight))
    .map((data, idx) => {
      return (
        <ScheduleTableRow key={idx} data={data} />
      );
    });

  return (
    <div className="w100">
      {filterFlight ? filtered :
        schedule.map((data, idx) => {
          return (
            <ScheduleTableRow key={idx} data={data} />
          );
        })
      }
    </div >
  );
}

export default ScheduleTable;


;
