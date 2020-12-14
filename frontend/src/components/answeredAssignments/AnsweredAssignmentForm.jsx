import React, { useState, useEffect } from 'react'
import AssignmentsApi from '../../api/AssignmentsApi';
import AnsAssApi from '../../api/AnsweredAssignmentsApi';
import AssApi from '../../api/AssignmentsApi';
import UserApi from '../../api/UserApi';
import book from '../../images/carousel/carousel-6.jpg';
import book1 from '../../images/resource_image/book.jpg';
import { useHistory } from 'react-router-dom';
import '../../css/styles.css';
import Home from '../home/HomePage.js';

export default function AnsweredAssignmentsForm({ match }) {
    const history = useHistory();
    const [answeredAssignmentTitle, setAnsweredAssignmentTitle] = useState("");
    const [answeredAssignmentDescription, setAnsweredAssignmentDescription] = useState("");
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
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [question5, setQuestion5] = useState("");
    const [question6, setQuestion6] = useState("");
    const [question7, setQuestion7] = useState("");
    const [question8, setQuestion8] = useState("");
    const [question9, setQuestion9] = useState("");
    const [question10, setQuestion10] = useState("");
    const [assignmentId, setAssignmentId] = useState("");
    const [user, setUser] = useState(" ");

    const subAssignmentDetails = [
        { question: question1, answer: answer1, answerFunction: setAnswer1 },
        { question: question2, answer: answer2, answerFunction: setAnswer2 },
        { question: question3, answer: answer3, answerFunction: setAnswer3 },
        { question: question4, answer: answer4, answerFunction: setAnswer4 },
        { question: question5, answer: answer5, answerFunction: setAnswer5 },
        { question: question6, answer: answer6, answerFunction: setAnswer6 },
        { question: question7, answer: answer7, answerFunction: setAnswer7 },
        { question: question8, answer: answer8, answerFunction: setAnswer8 },
        { question: question9, answer: answer9, answerFunction: setAnswer9 },
        { question: question10, answer: answer10, answerFunction: setAnswer10 }
    ];

    const getAssignmentById = (id) => {
        console.log("Calling getAssignmentById " + id)
        AssignmentsApi.getAssignmentById(id)
            .then(response => {
                setAssignmentId(response.data.id);
                setAnsweredAssignmentTitle(response.data.assignmentTitle);
                setAnsweredAssignmentDescription(response.data.assignmentDescription)
                setQuestion1(response.data.question1);
                setQuestion2(response.data.question2);
                setQuestion3(response.data.question3);
                setQuestion4(response.data.question4);
                setQuestion5(response.data.question5);
                setQuestion6(response.data.question6);
                setQuestion7(response.data.question7);
                setQuestion8(response.data.question8);
                setQuestion9(response.data.question9);
                setQuestion10(response.data.question10);
            })
    }

    const getUserRole = () => {
        UserApi.getCurrentUser()
            .then(response => {
                setUser(response.data);
                console.log("User Name" + user.name);
            })
    };

    const getAll = () => {
        AssApi.getAllAssignment()
            .then(response => {console.log('check: ',response.data)})
    };

    useEffect(() => {
        console.log('Console me', getAll)
        getAssignmentById(match.params.assignId);
        getUserRole();
        console.log('Joke!!')
    }, []);

    const createAnsweredAssignment = (answers) => {
        console.log("Inside createAnsweredAssignment" + answers);
        AnsAssApi.createAnsweredAssignment(answers).then((response) => {
          console.log(response);
          history.goBack();
        });
      };


    return (
        <>
        <div className="card mt-4">
                <div className="card-body">
                    <h6 className="card-title" >{answeredAssignmentTitle}</h6>
                    <div>
                        <div className="form-group">
                            <label>Student Name:</label>
                            {user.name}
                        </div>
                        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false" data-wrap="false">
                            <div class="carousel-inner">
                                {
                                    subAssignmentDetails.map((eachQuestion, index) => (
                                        <div class={index === 0 ? "carousel-item active" : "carousel-item"}>
                                            <img src={book1} alt="quiz" width="1100" height="180" />
                                            <div class="carousel-caption  d-md-block">
                                                <label>{index+1 + '. ' + eachQuestion.question}</label>
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Type your answer here..."
                                                    value={eachQuestion.answer}
                                                    onChange={e => eachQuestion.answerFunction(e.target.value)} 
                                                />
                                                {index===9? 
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                    createAnsweredAssignment({
                                                        answeredAssignmentTitle,
                                                        answer1,
                                                        answer2,
                                                        answer3,
                                                        answer4,
                                                        answer5,
                                                        answer6,
                                                        answer7,
                                                        answer8,
                                                        answer9,
                                                        answer10,
                                                        assignmentId,
                                                        user,
                                                    })
                                                    }
                                                >
                                                    Submit
                                                </button> : null}
                                            </div>
                                            
                                                
                                            </div>
                                            
                                         ))
                                }
                            </div>
                            <ol class="carousel-indicators" >
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            <li data-target="#myCarousel" data-slide-to="4"></li>
                            <li data-target="#myCarousel" data-slide-to="5"></li>
                            <li data-target="#myCarousel" data-slide-to="6"></li>
                            <li data-target="#myCarousel" data-slide-to="7"></li>
                            <li data-target="#myCarousel" data-slide-to="8"></li>
                            <li data-target="#myCarousel" data-slide-to="9"></li>
                        </ol>
                            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                      
                    </div>
                </div>
            </div>
            
        </>
        
    );
}

