

import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import CourseForm from "./CourseForm";

import CoursesApi from "../../api/CoursesApi";
import CoursesList from "./CoursesList";

import CourseUpdateForm from './CourseUpdateForm.js';

import AssignmentsApi from "../../api/AssignmentsApi";
import UserApi from "../../api/UserApi";


function CoursePage() {
   
  const [courses, setCourses] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  
    //useState variables
  
  const [formState, setFormState]= useState(false);
  const [currentUser, setCurrentUser] = useState("");
  

  const getAll = () => {
    CoursesApi.getAllCourses().then((res) => {
      setCourses(res.data.sort((a, b) => b.id - a.id));
    });
  };
  
  //Get userRole call
const getUserRole = () => {
  UserApi.getCurrentUser()
      .then(response => {
      setCurrentUser(response.data.userRole);
      })
}

  useEffect(() => {
    getAll();
    getUserRole();
  }, []);

  const createCourse = (courseData) => {
    return CoursesApi.createCourse(courseData).then((res) => {
      setCourses([res.data, ...courses]);
      // setOpenForm(false);
    });
  };

  const onCancelCreateCourse = () => {
    setOpenForm(false);
  };

  const deleteCourse = (course) => {
    console.log("course details", course.id);
    return CoursesApi.deleteCourse(course.id).then(() =>
      setCourses(courses.filter((a) => a.id !== course.id))
    );
  };
  
  const  onCreateNewCourse = () => {
    setOpenForm(true);
  };

const updateCourse = (updatedCourse) => {
    CoursesApi.put("", updatedCourse)
        .then(r => getAll());
};

  return (
    <div className="course-container">
      <div className="row-buttons">
         { openForm ? 
          <CourseForm onSubmit={createCourse} onCancel={onCancelCreateCourse} /> 
        
         : 
          <>
            <button
              className="btn btn-info course-button"
              onClick={onCreateNewCourse}>
              CREATE COURSE
            </button>
            <CoursesList 
              courses={courses} 
              onCourseDelete={deleteCourse} 
            />
          </>
        }
      </div>

     
    </div>
        /* {information.map((item) => {
     return < div>
       <CourseCard key={item.id} data={item} />
       <button className="btn btn-dark course-button"
          onClick = {() => {
              setFormState(true);
        }}>UPDATE COURSE 
          </button>
        {formState ? <CourseUpdateForm key={item.id} oldCourse={item} onUpdateClick = {updateCourse}/>: null }
       </div>
   })}
        
        
      </div> 
      </div>
 */
  );
}
export default CoursePage;

