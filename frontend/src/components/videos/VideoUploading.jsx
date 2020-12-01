import React, { useState, useEffect } from 'react';

export default function VideoUploading({ clickUpload }) {
  const [videoName, setvideoName] = useState('');
  const [videoUrl, setvideoUrl] = useState('');

  return (
    <>
      <h1>VideoUploading</h1>
      <label>Video Upload area</label>

      <input value={videoName} placeholder="enter name of video"></input>
      <input value={videoUrl} placeholder="enter video url"></input>

      <button onClick={clickUpload}>Upload</button>
    </>
  );
}
