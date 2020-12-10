import React, {useState,useEffect} from "react";
import AnsweredAssignmentsApi from '../../api/AnsweredAssignmentsApi';
import AssignmentsApi from '../../api/AssignmentsApi';
import AccordianForAssignment from '../accordian/AccordianForAssignment';
import StarRating from "../star/StarRating";
import '../../css/starRating.css';  

function AssignmentSubmitted({match}) {
    console.log("Value" + match.params.assignId);
    console.log("Name" + match.params.name);
    
    const[questions,setQuestions] = useState([]);
    const[answers,setAnswers] = useState([]);
    const[information,setInformation] = useState([]);
    
    const getAnsweredAssignmentById = (id) => {
        console.log("Calling getAssignmentById " + id )
        AnsweredAssignmentsApi.getAnsweredAssignmenttByAssignmentId(id)
            .then(response => {
                
                response.data.forEach( (item) => {
                
                console.log(item) ;
                if(item.user.name === match.params.name)
                {
                    console.log("Found" + JSON.stringify(item));
                    setAnswers(item);

                }}          
                    
                )});
                console.log("Filtered Array***" + JSON.stringify(answers));
                //setAnswers(newArray);
                
    }

    const getQuestionsAssignmentById = (id) => {
        console.log("Calling getAssignmentById " + id )
        AssignmentsApi.getAssignmentById(id)
            .then(response => {
                
                setQuestions(response.data);
                
                
                console.log("Data from questions table " + JSON.stringify(response.data));
            })
    }

    useEffect(() => {
        getQuestionsAssignmentById(match.params.assignId);
        getAnsweredAssignmentById(match.params.assignId); 
    
    },[] );


    
    return (
        <div>
         <div className="grading">
             <div className="gradinglabel">
             <h3> Grading</h3>
             </div>
             <div>
             <StarRating answers={answers}/>
             </div>
         </div>
         <AccordianForAssignment questions={questions} answers={answers}/>
        </div>  
      );}
export default AssignmentSubmitted;
