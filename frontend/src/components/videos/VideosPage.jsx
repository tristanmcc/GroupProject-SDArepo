import React, { useState, useEffect } from 'react';

import Api from '../../api/Api';

import Videos from './Videos';

export default function VideosPage() {
  const [user, setUser] = useState([]);

  useEffect(
    () =>
      Api.get('/user/me').then((res) => {
        setUser(res.data);
      }),
    []
  );

  return (
    <>
      <h1>Lectures Page</h1>

      <Videos user={user} />
    </>
  );
}
