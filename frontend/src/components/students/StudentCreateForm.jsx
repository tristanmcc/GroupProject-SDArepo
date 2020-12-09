import React, { useState } from 'react';

export default function StudentCreateForm({ onCreateClick, user }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div className="student-card-container">
      <div className="card-body create-post">
        <h2>Create Student</h2>

        <div className="input-group mb-3">
          <textarea
            className="form-control"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> 
        </div>
        
        <div className="input-group mb-3">
          <input
            className="form-control" maxLength="3"
            placeholder="Enter student age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button
          className="student-createbutton"
          onClick={() => {
            onCreateClick({ name, user, age });
            setName('');
          }}
        >
          Create Student
        </button>
      </div>
    </div>
  );
}
