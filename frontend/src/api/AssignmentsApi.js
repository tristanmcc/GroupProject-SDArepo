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
        question10}) {
        

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
        question10});
}

getAllAssignment() {
    console.log("Inside getAllAssignment")
    return Api.get('/assignments');
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
    question10}) {
    
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
    question10});
}

//TESTTESTETSTESTEST
getCurrentUser() {
    return Api.get('/currentUser');
}

}

export default new AssignmentsApi() ;