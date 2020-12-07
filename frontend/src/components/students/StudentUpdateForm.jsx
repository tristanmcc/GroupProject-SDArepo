import React, { useState } from 'react'

export default function StudentUpdateForm( {oldStudent, changeFormState, onStudentUpdate, onCancelUpdate}) {
    const [name, setName] = useState(oldStudent.name);
    const [age, setage] = useState(oldStudent.age);
    const id = oldStudent.id;

    const handleUpdateStudentClick = (e) => {
    const updatedStudent = { id, name, age };

    console.log('in from upd ', updatedStudent);
    onStudentUpdate(updatedStudent);
    changeFormState(false);
    };
    return (
      <div className="input-group mb-3">
        <textarea
        className="form-control"
        placeholder="Enter student name"
        value={name}
        onChange={e=> setName(e.target.value)}/>
                  
      <div className="input-group mb-3">
        <textarea
        className="form-control"
        placeholder="Enter student age"
        value={age}
        onChange={e=> setage(e.target.value)}/>
      </div>
      <div className="form-group"> 
        <button className="btn btn-dark" onClick={handleUpdateStudentClick} > 
          Update </button>
        <button className="btn btn-dark" onClick={onCancelUpdate}> Cancel </button>
      </div>
      </div>
          );
  }