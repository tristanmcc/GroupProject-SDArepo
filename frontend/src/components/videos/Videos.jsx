import React, { useState, useEffect } from "react";

import LecturesApi from "../../api/LecturesApi";
import VideoCard from "./VideoCard";

import "../../css/videos.css";
import "../../css/styles.css";

export default function Videos({ course, currentUser }) {
  const [videos, setVideos] = useState([]);
  const [lectures, setLectures] = useState([]);

  const viewVideos = (course) => {
    if (typeof course !== "undefined" && course !== "") {
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

  const uploads = () => {
    return setLectures([...new Set(videos.map((v) => v.course.title))]);
  };

  useEffect(() => {
    uploads();
  }, [videos]);

  useEffect(() => {
    viewVideos(course);
  }, [course]);

  return (
    <div>
      {lectures.map((lecture) => (
        <div className="class-videos">
          <div className="course-name">{lecture}</div>

          <div>
            {videos.map((item) => {
              if (item.course.title === lecture) {
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
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
