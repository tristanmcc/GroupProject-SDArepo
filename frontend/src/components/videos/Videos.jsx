import React, { useState, useEffect } from "react";

import LecturesApi from "../../api/LecturesApi";
import VideoCard from "./VideoCard";


import "../../CSS/videos.css";

export default function Videos({ course, currentUser }) {
  const [videos, setVideos] = useState([]);

  const viewVideos = (course) => {
    if (typeof course !== "undefined" && course !== "") {
      console.log("inside view videos", course.id);
      LecturesApi.getAllVideos(course.id)
        .then((res) => {
          setVideos(res.data.sort((a, b) => b.id - a.id));
        })
        .catch((err) => console.error(err));
    } else {
      LecturesApi.getAllLectures()
        .then((res) => {
          setVideos(res.data.sort((a, b) => b.id - a.id));
        })
        .catch((err) => console.error(err));
    }
  };

  const deleteVideo = (video) => {
    return LecturesApi.deleteLecture(video.id).then(() =>
      setVideos(videos.filter((a) => a.id !== video.id))
    );
  };

  useEffect(() => {
    viewVideos(course);
  }, [course]);

  const Cards = videos.map((item) => {
    return (
      <VideoCard
        key={item.id}
        video={item}
        onDeleteClick={deleteVideo}
        currentUser={currentUser}
      />
    );
  });

  return <div className="videoLayout">{Cards}</div>;
}
