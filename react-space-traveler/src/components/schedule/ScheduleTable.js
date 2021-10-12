import React, { useState, useEffect } from 'react';
import axios from '../../config/axios';
import ScheduleTableRow from './ScheduleTableRow';

function ScheduleTable(props) {
  const [schedule, setSchedule] = useState([]);
  const { filter } = props;

  useEffect(() => {
    axios.get('/schedule-flight')
      .then(res => {
        setSchedule(res.data.flights);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const filterFlight = schedule.filter((data) => (
    data.destination === filter))
    .map((data, idx) => {
      return (
        <ScheduleTableRow key={idx} data={data} />
      );
    });

  return (
    <div className="w100">
      {filter ? filterFlight :
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
