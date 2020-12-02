import Api from "./Api";

class AssignmentsApi
{
    
    
    postAssignment({assignmentTitle,
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
        question10,
        courseId
                   }) {
        

        return Api.post('/assignments',
        {assignmentTitle,
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
        question10,
        courseId});
}

getAllAssignment(courseId) {
    console.log("Inside getAllAssignment" + courseId)
    return Api.get('/assignments/courseId/'+ courseId);
}

deleteAssignment(id) {
    return Api.delete('/assignments/'+id);
} 

getAssignmentById(id) {
    return Api.get('/assignments/'+id);
}


updateAssignment({id,assignmentTitle,
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
    question10,
    courseId
}) {
    
    console.log("value of assignId"+ id);
    return Api.put('/assignments',
    {
    id,   
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
    question10,
    courseId
});
}

}

export default new AssignmentsApi() ;