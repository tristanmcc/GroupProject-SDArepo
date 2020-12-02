import React, { useState } from 'react';

export default function VideoUploadForm({ onCreateClick, user }) {
  const [videoName, setVideoName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  console.log(videoUrl);

  return (
    <>
      <h3>Create a video below</h3>
      <label>Video Upload area</label>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter the name of the video"
            value={videoName}
            onChange={(e) => setVideoName(e.target.value)}
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter the url for the video"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>
      </form>

      <button
        className="btn btn-primary"
        onClick={() => {
          onCreateClick({ videoName, videoUrl });
        }}
      >
        Upload
      </button>
    </>
  );
}
