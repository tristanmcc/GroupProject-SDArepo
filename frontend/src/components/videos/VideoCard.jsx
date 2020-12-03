import React from 'react';
import { Link } from 'react-router-dom';

import coursesIcon from '../../images/courses-icon.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function VideoCard({ video, onDeleteClick, user }) {
  console.log('videocard print out: ' + video.videoUrl);

  return (
    <div className="card mt-5 p-2">
      <div className="comment">
        <div className="signature">
          <Link to={{ pathname: video.videoUrl }}>
            <FontAwesomeIcon icon={faVideo} size="6x" color="black" />
          </Link>

          <span className="user-name-comment">{`video  name : ${video.videoName}`}</span>

          <span className="user-name-comment">{`   video  url : ${video.videoUrl}`}</span>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDeleteClick(video);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
