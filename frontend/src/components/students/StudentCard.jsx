import React, {useState} from 'react';
import Student from './Student.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import StudentUpdateForm from './StudentUpdateForm'

export default function StudentCard({student, onStudentDelete, onStudentUpdate}) {

  const [formState, setFormState] = useState(false);
  const onCancelUpdate = () => {
    setFormState(false);
  };

  return (
    <div className="card mt-5 p-2">
      <div className="comment">
        <div className="signature">
          <span className="user-name-comment">{`Student name: ${student.name}` }</span>
          <span className="user-name-comment">{`    Student age: ${student.age}`}</span>
          <div className="student-card-buttons">
            <button className="deleteButton" onClick ={() => onStudentDelete(student)}><FontAwesomeIcon icon={faTrash}/></button>
            <button className="updateButton" onClick={() => setFormState(true)}><FontAwesomeIcon icon={faPen}/></button>
          </div>
        </div>
        {formState ? (
          <StudentUpdateForm
            key={student.id}
            changeFormState={setFormState}
            oldStudent={student}
            onStudentUpdate={onStudentUpdate}
            onCancelUpdate={onCancelUpdate}
          />
        ) : null}

      </div>
    </div>
  );
}
