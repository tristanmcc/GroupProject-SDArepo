import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoCard({ video, onDeleteClick, user }) {
  console.log('this is message: ' + video);

  return (
    <div className="card mt-5 p-2">
      <div className="comment">
        <div className="signature">
          <Link to={video.url}>
            <img src="fab fa-youtube" alt="font awesome icon"></img>
          </Link>

          <span className="user-name-comment">{`video  name : ${video.videoName}`}</span>

          <span className="user-name-comment">{`   video  url : ${video.url}`}</span>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDeleteClick(video);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}
