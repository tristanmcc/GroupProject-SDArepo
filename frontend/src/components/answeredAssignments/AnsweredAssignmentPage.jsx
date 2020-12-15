import React, {useEffect, useState} from "react";
import AnsAssApi from '../../api/AnsweredAssignmentsApi';
import AnsAssForm from '../answeredAssignments/AnsweredAssignmentForm';
import AssApi from '../../api/AssignmentsApi';


export default function AnsweredAssignmentPage() {
   
   

    //Rest API post call to create Answered Assignment
    /*const createAnsweredAssignment = (answers) => {
        console.log("Inside createAnsweredAssignment" + answers)
        AnsAssApi.createAnsweredAssignment(answers)
        .then(()=> window.location.reload());
    };*/

    const [assignments, setAssignments] = useState([]);

    const getAll = () => {
        AssApi.getAllAssignment()
        .then((response) => 
            setAssignments(response.data))
    };

    useEffect(() => {
       getAll();
    }, []);


    const assignmentsDue = assignments.map(assignment => {
        return <AnsAssForm key={assignment.id}  assignmentsDue={assignment} />;
      });

    const assignmentTitles = assignments.map(assignment => assignment.assignmentTitle);



    return (
        <>
      
        <div>
            <AnsAssForm getAll= {getAll}></AnsAssForm>
        </div>
        </>
    );
}
//onSubmit={createAnsweredAssignment} 


                                 


                               
                                    
