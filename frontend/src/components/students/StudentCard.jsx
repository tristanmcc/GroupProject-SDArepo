import React from 'react';
import Student from './Student.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
export default function StudentCard({student, onStudentDelete, onStudentUpdate}) {
  //const { id, name, age, thumbnail } = data;
  //console.log('this is message: ' + data);
  //console.log('this is message: ' + data.items.name);

  return (
    <div className="card mt-5 p-2">
      <div className="comment">
        <div className="signature">
          <span className="user-name-comment">{`My Student  name : ${student.name}`}</span>
          <span className="user-name-comment">{`Student  age : ${student.age}`}</span>
          <div className="student-card-buttons">
            <button className="deleteButton" onClick ={() => onStudentDelete(student)}><FontAwesomeIcon icon={faTrash}/></button>
            <button className="updateButton" onClick ={() => onStudentUpdate(student)}><FontAwesomeIcon icon={faPen}/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
