import React, { useState, useEffect } from 'react'
import AssApi from '../../api/AssignmentsApi';
import AnsAssApi from '../../api/AnsweredAssignmentsApi';

export default function AnsweredAssignmentsForm({assignmentsDue}) {
    
    const [answeredAssignmentTitle, setAnsweredAssignmentTitle] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [answer5, setAnswer5] = useState("");
    const [answer6, setAnswer6] = useState("");
    const [answer7, setAnswer7] = useState("");
    const [answer8, setAnswer8] = useState("");
    const [answer9, setAnswer9] = useState("");
    const [answer10, setAnswer10] = useState("");

    console.log(assignmentsDue)

    const createAnsweredAssignment = (answers) => {
        console.log("Inside createAnsweredAssignment" + answers)
        AnsAssApi.createAnsweredAssignment(answers)
        .then(()=> window.location.reload());
    };

   /* const {
        assignmentTitle, 
        assignmentDescription, 
        question1, 
        question2, 
        question3, 
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10
    } = assignmentsDue; */

   // const assignmentTitles = assignmentsDue.map(assignment => assignment.assignmentTitle);

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h6 className="card-title" >Geography quiz</h6>
                <p className="card-subtitle">This is a knowledge quiz to test whether you paid attention to this weeks prescribed videos!</p>
                <div>
                    <div className="form-group">
                    <label>Student Number:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answeredAssignmentTitle}
                            onChange={e => setAnsweredAssignmentTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>What is the capital of Bulgaria?</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer1}
                            onChange={e => setAnswer1(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>What is terreaforming?</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer2}
                            onChange={e => setAnswer2(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>Describe a cumulonimbus cloud:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer3}
                            onChange={e => setAnswer3(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>What is urban sprawl?</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer4}
                            onChange={e => setAnswer4(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>Describe the process of urbanisation:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer5}
                            onChange={e => setAnswer5(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>What does the fox say?</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer6}
                            onChange={e => setAnswer6(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>What is the global population?</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer7}
                            onChange={e => setAnswer7(e.target.value)} />
                    </div>
                    <label>What is the capital of South Africa?</label>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer8}
                            onChange={e => setAnswer8(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>Describe El nino cycle:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer9}
                            onChange={e => setAnswer9(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>What is a coniferous tree?</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer10}
                            onChange={e => setAnswer10(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-danger"
                            onClick={() => createAnsweredAssignment({answeredAssignmentTitle, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10 })}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

