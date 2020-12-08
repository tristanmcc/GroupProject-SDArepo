import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function VideoCard({ video, onDeleteClick, user }) {
  return (
    <div className="card mt-5 p-2">
      <div className="comment">
        <div className="signature">
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faVideo} size="6x" color="black" />
          </a>

          <span className="user-name-comment">{`video  name : ${video.videoName}`}</span>
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
