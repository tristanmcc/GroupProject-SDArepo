import React from 'react';

import axios from 'axios';

import Video from './Video';
import VideoUploading from './VideoUploading.jsx';

import information from '../../resources/information.json';

export default function VideosPage() {
  const Uploader = () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'presentUserToken',
      },
    };

    axios
      .post(
        'http:localhost/8080/videos',
        {
          title: 'New Todo',
          completed: false,
        },
        config
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.err(err));
  };

  return (
    <>
      <h1>Lectures</h1>
      <Video data={information[6]} />

      <h1>Upload feature</h1>
      <VideoUploading clickUpload={Uploader} />
    </>
  );
}
