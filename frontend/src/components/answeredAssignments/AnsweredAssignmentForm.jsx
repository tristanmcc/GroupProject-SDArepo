import React, { useState, useEffect } from 'react'
import AssignmentsApi from '../../api/AssignmentsApi';
import AnsAssApi from '../../api/AnsweredAssignmentsApi';
import book from '../../images/carousel/carousel-6.jpg';
import '../../CSS/assignment.css';


export default function AnsweredAssignmentsForm({match}) {
    
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
    
    const getAssignmentById = (id) => {
        console.log("Calling getAssignmentById " + id )
        AssignmentsApi.getAssignmentById(id)
            .then(response => {
                console.log("Title value" +response.data.assignmentTitle);
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
                
                console.log(response.data);
            })
    }
    useEffect(() => {
        
            
            console.log("Inside useEffect , going to call getAssignmentById " + match.params.assignId);
            getAssignmentById(match.params.assignId);

        
        },[] );

    const createAnsweredAssignment = (answers) => {
        console.log("Inside createAnsweredAssignment" + answers)
        AnsAssApi.createAnsweredAssignment(answers)
        .then((response)=> {
            console.log(response);
            window.location.reload();
        });
    };
    


    return (
        <>
       
        <div className="card mt-4">
            <div className="card-body">
                <h6 className="card-title" >{answeredAssignmentTitle}</h6>
                <p className="card-subtitle">{answeredAssignmentDescription}</p>
                <div>
                    <div className="form-group">
                    <label>Student Number:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value=""
                            onChange={e => setAnsweredAssignmentTitle(e.target.value)} />
                    </div>

                    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false" data-wrap="false">
                    <div class="carousel-inner">

                    <div class="carousel-item active">
                        
                    <img src={book} alt="quiz" width="1100" height="180"/>
                    <div class="carousel-caption  d-md-block">
                    <label>{question1}</label>   
                    
                    <textarea
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer1}
                            onChange={e => setAnswer1(e.target.value)} />
        
                    </div>
                    </div>

                    <div class="carousel-item ">
                        
                    <img src={book} alt="quiz" width="1100" height="180"/>
                    <div class="carousel-caption  d-md-block">
                    <label>{question2}</label>   
                    
                    <textarea
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer2}
                            onChange={e => setAnswer2(e.target.value)} />
        
                    </div>
                    </div>

                    <div class="carousel-item">
                        
                    <img src={book} alt="quiz" width="1100" height="180"/>
                    <div class="carousel-caption  d-md-block">
                    <label>{question3}</label>   
                    
                    <textarea
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer3}
                            onChange={e => setAnswer3(e.target.value)} />
        
                    </div>
                    </div>

                    <div class="carousel-item">
                        
                    <img src={book} alt="quiz" width="1100" height="180"/>
                    <div class="carousel-caption  d-md-block">
                    <label>{question4}</label>   
                    
                    <textarea
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer4}
                            onChange={e => setAnswer4(e.target.value)} />
        
                    </div>
                    </div>

                    <div class="carousel-item">
                        
                    <img src={book} alt="quiz" width="1100" height="180"/>
                    <div class="carousel-caption  d-md-block">
                    <label>{question5}</label>   
                    
                    <textarea
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer5}
                            onChange={e => setAnswer5(e.target.value)} />
        
                    </div>
                    </div>

                    <div class="carousel-item ">
                        
                    <img src={book} alt="quiz" width="1100" height="180"/>
                    <div class="carousel-caption  d-md-block">
                    <label>{question6}</label>   
                    
                    <textarea
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer6}
                            onChange={e => setAnswer6(e.target.value)} />
        
                    </div>
                    </div>

                    <div class="carousel-item ">
                        
                    <img src={book} alt="quiz" width="1100" height="180"/>
                    <div class="carousel-caption  d-md-block">
                    <label>{question7}</label>   
                    
                    <textarea
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer7}
                            onChange={e => setAnswer7(e.target.value)} />
        
                    </div>
                    </div>

                    <div class="carousel-item ">
                        
                    <img src={book} alt="quiz" width="1100" height="180"/>
                    <div class="carousel-caption  d-md-block">
                    <label>{question8}</label>   
                    
                    <textarea
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer8}
                            onChange={e => setAnswer8(e.target.value)} />
        
                    </div>
                    </div>

                    <div class="carousel-item ">
                        
                    <img src={book} alt="quiz" width="1100" height="180"/>
                    <div class="carousel-caption  d-md-block">
                    <label>{question9}</label>   
                    
                    <textarea
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer9}
                            onChange={e => setAnswer9(e.target.value)} />
        
                    </div>
                    </div>

                    <div class="carousel-item ">
                        
                    <img src={book} alt="quiz" width="1100" height="180"/>
                    <div class="carousel-caption  d-md-block">
                    <label>{question10}</label>   
                    
                    <textarea
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={answer10}
                            onChange={e => setAnswer10(e.target.value)} />
        
                    </div>
                    </div>

                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
  
                    </div>


                    

                    <div className="form-group">
                        <button
                            className="btn btn-danger"
                            onClick={() => createAnsweredAssignment({answeredAssignmentTitle, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, assignmentId })}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
     </>   
    );
}

