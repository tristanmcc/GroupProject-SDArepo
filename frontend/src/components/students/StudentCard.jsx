import React from 'react';

export default function StudentCard({ onGetClick, student }) {
  return (
    <div className="comment">
      <div className="comment">
        <div className="signature">
          <span className="user-name-comment">{student.name}</span>
          <span className="user-name-comment">{student.age}</span>
        </div>

        <div>students recorded in DB. </div>
        <div>display created students here. </div>
      </div>
    </div>
  );
}
