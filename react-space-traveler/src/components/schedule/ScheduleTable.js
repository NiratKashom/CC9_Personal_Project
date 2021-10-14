import React, { useState, useEffect, useContext } from 'react';
import axios from '../../config/axios';
import ScheduleTableRow from './ScheduleTableRow';
import { getToken } from '../../services/localStorageService';
import { flightContext } from '../../contexts/flightContext';

function ScheduleTable({ filterFlight }) {
  const { flightTrigger } = useContext(flightContext);
  const [schedule, setSchedule] = useState([]);


  useEffect(() => {
    axios.get('/schedule-flight', {
      headers: { authorization: 'Bearer ' + getToken() }
    })
      .then(res => {
        setSchedule(res.data.flights);
      })
      .catch(err => {
        console.log(err);
      });
  }, [flightTrigger]);

  const filtered = schedule.filter((data) => (
    data.destination === filterFlight))
    .sort((a, b) => {
      const aDate = new Date(b.departureDate).getTime();
      const bDate = new Date(a.departureDate).getTime();
      return bDate - aDate;
    }).map((data, idx) => {
      return (
        <ScheduleTableRow key={idx} data={data} />
      );
    });

  return (
    <div className="w100">
      {filterFlight ? filtered :
        schedule.sort((a, b) => {
          const aDate = new Date(b.departureDate).getTime();
          const bDate = new Date(a.departureDate).getTime();
          return bDate - aDate;
        }).map((data, idx) => {
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
