import React, { useState, useEffect } from "react";

import UserApi from "../../api/UserApi";

import Videos from "./Videos";

export default function VideosPage() {
  const [user, setUser] = useState([]);

  /*   useEffect(
    () =>
      Api.get('/user/me').then((res) => {
        setUser(res.data);
      }),
    []
  ); */

  //Get userRole call
  const getUserRole = () => {
    UserApi.getCurrentUser().then((response) => {
      setUser(response.data);
    });
  };

  useEffect(() => {
    getUserRole();
  }, []);

  return (
    <>
      <h1>Lectures Page</h1>

      <Videos user={user} />
    </>
  );
}
