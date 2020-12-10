import React, { useState, useEffect } from 'react';

import Scheduler from './Scheduler';
import UserApi from '../../api/UserApi';

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
    <>
      <Scheduler currentUser={currentUser} />
    </>
  );
}
