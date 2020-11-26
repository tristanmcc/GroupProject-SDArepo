import React, {useState} from "react";
import AnsAssApi from '../../api/AnsweredAssignmentsApi';
import AnsAssForm from '../answeredAssignments/AnsweredAssignmentForm';


export default function AnsweredAssignmentPage() {
   
   

    //Rest API post call to create Answered Assignment
    const createAnsweredAssignment = (answers) => {
        console.log("Inside createAnsweredAssignment" + answers)
        AnsAssApi.createAnsweredAssignment(answers)
        .then(()=> window.location.reload());
    };

    return (
        <div>
            <AnsAssForm onSubmit={createAnsweredAssignment}/>
        </div>
    );
}



                                 


                               
                                    
