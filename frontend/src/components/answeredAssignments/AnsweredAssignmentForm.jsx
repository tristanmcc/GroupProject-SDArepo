import React, { useState, useEffect } from 'react'
import AssApi from '../../api/AssignmentsApi';

export default function AnsweredAssignmentsForm({onSubmit}) {
    
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

    const [assignments, setAssignments] = useState([]);

    const getAll = () => {
        AssApi.getAllAssignment()
        .then((response) => 
            setAssignments(response.data))
    };

    useEffect(() => {
       getAll();
    }, []);


        const assignmentTitles = assignments.map(assignment => assignment.assignmentTitle);
        const assignmentDescriptions = assignments.map(assignment => assignment.assignmentDescription);
        const assQues1 = assignments.map(assignment => assignment.question1);
        const assQues2 = assignments.map(assignment => assignment.question2);
        const assQues3 = assignments.map(assignment => assignment.question3);
        const assQues4 = assignments.map(assignment => assignment.question4);
        const assQues5 = assignments.map(assignment => assignment.question5);
        const assQues6 = assignments.map(assignment => assignment.question6);
        const assQues7 = assignments.map(assignment => assignment.question7);
        const assQues8 = assignments.map(assignment => assignment.question8);
        const assQues9 = assignments.map(assignment => assignment.question9);
        const assQues10 = assignments.map(assignment => assignment.question10);

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h6 className="card-title" >{assignmentTitles}:</h6>
                <div>
                    <div className="form-group">
                        <label>{assignmentTitles}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answeredAssignmentTitle}
                            onChange={e => setAnsweredAssignmentTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>{assQues1}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer1}
                            onChange={e => setAnswer1(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>{assQues2}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer2}
                            onChange={e => setAnswer2(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>{assQues3}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer3}
                            onChange={e => setAnswer3(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>{assQues4}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer4}
                            onChange={e => setAnswer4(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>{assQues5}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer5}
                            onChange={e => setAnswer5(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>{assQues6}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer6}
                            onChange={e => setAnswer6(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>{assQues7}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer7}
                            onChange={e => setAnswer7(e.target.value)} />
                    </div>
                    <label>{assQues8}</label>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer8}
                            onChange={e => setAnswer8(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>{assQues9}</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer9}
                            onChange={e => setAnswer9(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <label>{assQues10}</label>
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
                            onClick={() => onSubmit({answeredAssignmentTitle, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10 })}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

