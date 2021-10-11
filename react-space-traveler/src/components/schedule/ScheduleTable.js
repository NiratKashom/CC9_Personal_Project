import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScheduleTableRow from './ScheduleTableRow';
// import { getToken } from '../services/localStorage';
// import { MOCK_FLIGHT } from '../../temp/MOCK_SHCEDULE_FLIGTH';
import { API_URL } from '../../config/env';
import { serviceContext } from '../../contexts/serviceContext';

function ScheduleTable(props) {
  const [schedule, setSchedule] = useState([]);
  const { filter } = props;

  useEffect(() => {
    axios.get(`${API_URL}/schedule-flight`)
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
