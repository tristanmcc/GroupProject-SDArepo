import React, { useState, useEffect } from 'react';

import Api from '../../api/Api';
import VideoCard from './VideoCard';
import VideoUploadForm from './VideoUploadForm';

import Grid from '@material-ui/core/Grid';

import '../../CSS/videos.css';

export default function Videos({ user }) {
  const [videos, setVideos] = useState([]);
  console.log('from videos line: ' + videos);

  const createVideo = (videoData) => {
    console.log('videodata : ' + videoData);
    Api.post('/videos', videoData)
      .then((res) => setVideos([...videos, res.data]))
      .catch((err) => console.error(err));

    console.log('from videos: ' + videos);
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

  const Cards = videos.map((item) => {
    return (
      <div className="videoLayout">
        <VideoCard
          key={item.id}
          video={item}
          onDeleteClick={deleteVideo}
          user={user}
        />
      </div>
    );
  });

  return (
    <div>
      <div>
        <VideoUploadForm onCreateClick={createVideo} user={user} />

        <div>{Cards}</div>
      </div>
    </div>
  );
}
