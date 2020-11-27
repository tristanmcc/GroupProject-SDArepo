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

    getAllAssignments() {
        
        return Api.get('/assignments');
    }
}

export default new AssignmentsApi() ;