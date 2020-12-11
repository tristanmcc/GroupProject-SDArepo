import React, { useState, useEffect } from 'react';

import Scheduler from './Scheduler';
import UserApi from '../../api/UserApi';
import Style from "../../css/scheduler.css";


export default function SchedulerPage() {
  const [currentUser, setCurrentUser] = useState([]);

  const getUserRole = () => {
    UserApi.getCurrentUser().then((response) => {
      setCurrentUser(response.data);
    });
  };

  useEffect(() => {
    getUserRole();
  }, []);

  return (

    <div>
       <div className="sheduler-banner">Scheduler</div>
              <div className="horizontalline"> </div>
      <Scheduler currentUser={currentUser} />
    </div>
  );
}
