import React, { useState, useEffect } from "react";

import UserApi from "../../api/UserApi";

import Videos from './Videos';


export default function VideosPage() {
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
      <h1>Lectures Page</h1>

      <Videos currentUser={currentUser} />
    </>
  );
}
