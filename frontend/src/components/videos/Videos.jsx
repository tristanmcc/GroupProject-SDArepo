import React, { useState, useEffect } from 'react';

import Api from '../../api/Api';
import VideoCard from './VideoCard';
import VideoUploadForm from './VideoUploadForm';

export default function Videos({ user }) {
  const [videos, setVideos] = useState([]);

  const createVideo = (videoData) => {
    Api.post('/videos', videoData)
      .then((res) => setVideos([...videos, res.data]))
      .catch((err) => console.error(err));
  };

  const getVideos = () => {
    Api.get('/videos')
      .then((res) => {
        setVideos(res.data.sort((a, b) => b.id - a.id));
      })
      .catch((err) => console.error(err));
  };

  const deleteVideo = (video) => {
    Api.delete('/videos/' + video.id)
      .then((res) => getVideos())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <div>
        <VideoUploadForm onCreateClick={createVideo} user={user} />

        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onDeleteClick={deleteVideo}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}
