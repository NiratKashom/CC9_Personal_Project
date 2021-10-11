import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScheduleTableRow from './ScheduleTableRow';
// import { getToken } from '../services/localStorage';
// import { MOCK_FLIGHT } from '../../temp/MOCK_SHCEDULE_FLIGTH';
import { API_URL } from '../../config/env';

function ScheduleTable() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/schedule-flight`)
      .then(res => {
        setSchedule(res.data.flights);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w100">
      {schedule.map((data, idx) => {
        return (
          <ScheduleTableRow key={idx} data={data} />
        );
      })}
    </div >
  );
}

export default ScheduleTable;


;
