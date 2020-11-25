import Api from "./Api";

class AssignmentsApi
{
    
    
    postAssignment(assignment) {
    return Api.post('/assignments',assignment);
}
}

export default new AssignmentsApi() ;