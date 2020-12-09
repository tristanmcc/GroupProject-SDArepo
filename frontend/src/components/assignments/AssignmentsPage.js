import React, { useState, useEffect } from 'react';
import AssignmentsApi from '../../api/AssignmentsApi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Link } from 'react-router-dom';

function AssignmentsPage({ course, currentUser }) {
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState('');
  const [question5, setQuestion5] = useState('');
  const [question6, setQuestion6] = useState('');
  const [question7, setQuestion7] = useState('');
  const [question8, setQuestion8] = useState('');
  const [question9, setQuestion9] = useState('');
  const [question10, setQuestion10] = useState('');
  const [assignId, setAssignId] = useState('');

  function handleSubmit() {
    AssignmentsApi.postAssignment({
      course,
      assignmentTitle,
      assignmentDescription,
      dueDate,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10,
    }).then((response) => {
      setAssignId(response.data.id);
      window.location.reload();

      {
        /*}    alert('Successfully added the assignment'); */
      }
    });
  }

  function handleUpdate() {
    console.log('Inside Update' + assignId);
    // Creating a local variable
    const id = assignId;
    AssignmentsApi.updateAssignment({
      id,
      assignmentTitle,
      assignmentDescription,
      dueDate,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10,
      course,
    }).then((response) => {
      window.location.reload();
      /*alert('Updation of Assignment Successful')*/
    });
  }

  return (
    <div className="container-assignment">
      <div className="form-group">
        <label>Assignment Title:</label>

        <input
          type="text"
          value={assignmentTitle}
          className="form-control"
          onChange={(e) => setAssignmentTitle(e.target.value)}
        />
      </div>

      <div className="form-group text-dark">
        <label>Assignment Description:</label>

        <input
          type="text"
          value={assignmentDescription}
          className="form-control"
          onChange={(e) => setAssignmentDescription(e.target.value)}
        />
      </div>
      <div className="form-group text-dark">
        <label>Deadline: </label>
        <p></p>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          showCalendarIcon={true}
        />
      </div>

      <div className="card-body text-dark border">
        <div className="question">
          <div className="form-group">
            <label>Question 1:</label>
            <textarea
              type="text"
              value={question1}
              className="form-control"
              onChange={(e) => setQuestion1(e.target.value)}
            />
          </div>

          <div>
            <label>Question 2:</label>
            <textarea
              type="text"
              value={question2}
              className="form-control"
              onChange={(e) => setQuestion2(e.target.value)}
            />
          </div>

          <div>
            <label>Question 3:</label>
            <textarea
              type="text"
              value={question3}
              className="form-control"
              onChange={(e) => setQuestion3(e.target.value)}
            />
          </div>

          <div>
            <label>Question 4:</label>
            <textarea
              type="text"
              value={question4}
              className="form-control"
              onChange={(e) => setQuestion4(e.target.value)}
            />
          </div>

          <div>
            <label>Question 5:</label>
            <textarea
              type="text"
              value={question5}
              className="form-control"
              onChange={(e) => setQuestion5(e.target.value)}
            />
          </div>

          <div>
            <label>Question 6:</label>
            <textarea
              type="text"
              value={question6}
              className="form-control"
              onChange={(e) => setQuestion6(e.target.value)}
            />
          </div>

          <div>
            <label>Question 7:</label>
            <textarea
              type="text"
              value={question7}
              className="form-control"
              onChange={(e) => setQuestion7(e.target.value)}
            />
          </div>

          <div>
            <label>Question 8:</label>
            <textarea
              type="text"
              value={question8}
              className="form-control"
              onChange={(e) => setQuestion8(e.target.value)}
            />
          </div>

          <div>
            <label>Question 9:</label>
            <textarea
              type="text"
              value={question9}
              className="form-control"
              onChange={(e) => setQuestion9(e.target.value)}
            />
          </div>

          <div>
            <label>Question 10:</label>
            <textarea
              type="text"
              value={question10}
              className="form-control"
              onChange={(e) => setQuestion10(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="card-header">
        {assignId === '' ? (
          <Link to="/assignments">
            <button
              className=" btn btn-dark btn-sm"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </Link>
        ) : (
          <Link to="/assignments">
            <button
              className=" btn btn-dark btn-sm"
              onClick={() => handleUpdate()}
            >
              Update
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default AssignmentsPage;
