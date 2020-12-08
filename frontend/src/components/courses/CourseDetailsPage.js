import React, {useState, useEffect} from 'react';
import "../../App.css";
import AssignmentsView from '../assignments/AssignmentsView';
import CoursesApi from '../../api/CoursesApi';
import UserApi from '../../api/UserApi';
import AssignmentsPage from '../assignments/AssignmentsPage';


export default function CourseDetailsPage({match}) {
    
    const courseId = match.params.id;
    const [course, setCourse] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    const [openForm, setOpenForm] = useState(true);
    const onCreateNewAssignment = () => {
        setOpenForm(false);
      };

    const getCourseById = (courseId) => {
        CoursesApi.getCourseById(courseId).then((res) => {
          
          setCourse(res.data)
          //setCourse(res.data);
          
        });
      };
      
      //Get userRole call
    const getUserRole = () => {
        UserApi.getCurrentUser().then(response => {
          
          setCurrentUser(response.data);
          
          })
    }
      useEffect(() => {
        getCourseById(courseId);
        getUserRole();
      }, []);

    return (
        
        <div>
        { openForm ? 
            <div>
                
                    <AssignmentsView course={course} currentUser={currentUser}/> 
            
                    <button className=" btn btn-light" onClick={onCreateNewAssignment}>
                    Add New Assignment
                    </button>
                    
             </div>
            
        :
            <AssignmentsPage course={course} currentUser={currentUser}/>}
            </div>


       
    );
}