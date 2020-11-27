import React from 'react';

export default function StudentCard(data) {
  console.log('this is message: ' + data);
  console.log('this is message: ' + data.items.name);

  return (
    <div className="card mt-5">
      <div className="comment">
        <div className="signature">
          <span className="user-name-comment">{`Student  name : ${data.items.name}`}</span>

          <span className="user-name-comment">{`   Student  age : ${data.items.age}`}</span>
        </div>
      </div>
    </div>
  );
}
