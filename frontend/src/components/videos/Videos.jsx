import React, { useState, useEffect } from 'react';

import LecturesApi from '../../api/LecturesApi';
import VideoCard from './VideoCard';
import VideoUploadForm from './VideoUploadForm';

import '../../CSS/videos.css';

export default function Videos({ course, currentUser }) {
  const [videos, setVideos] = useState([]);
  console.log('from videos line: ' + videos);


  const getAllVideosByCourse = (course) => {
    console.log("course requested");
    LecturesApi.getAllByCourseId(course.id)
      .then((res) => {
        setVideos(res.data.sort((a,b) => b.id - a.id));
      })
      .catch((err) => console.error(err));
  };

  const createVideo = (videoData) => {
    console.log('videodata : ' + videoData);
    LecturesApi.createLecture(videoData)
      .then((res) => setVideos([...videos, res.data]))
      .catch((err) => console.error(err));

    console.log('from videos: ' + videos);
  };

  const getVideos = () => {
    LecturesApi.getAllLectures()
      .then((res) => {
        setVideos(res.data.sort((a, b) => b.id - a.id));
      })
      .catch((err) => console.error(err));
  };

  const deleteVideo = (video) => {
    LecturesApi.deleteLecture(video.id)
      .then((res) => getVideos())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVideos();
    getAllVideosByCourse(course)
  }, [course]);

  const Cards = videos.map((item) => {
    return (
      <div className="videoLayout">
        <VideoCard
          key={item.id}
          video={item}
          onDeleteClick={deleteVideo}
          currentUser={currentUser}
        />
      </div>
    );
  });

  return (
    <div>
      <div>
        <VideoUploadForm
          onCreateClick={createVideo}
          currentUser={currentUser}
        />

        <div>{Cards}</div>
      </div>
    </div>
  );
}
