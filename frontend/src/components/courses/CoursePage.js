

import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import CourseForm from "./CourseForm";

import CoursesApi from "../../api/CoursesApi";
import CoursesList from "./CoursesList";

import CourseUpdateForm from './CourseUpdateForm.js';


import UserApi from "../../api/UserApi";


function CoursePage() {
   
  const [courses, setCourses] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  
    //useState variables
  
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
    return CoursesApi.deleteCourse(course.id).then(() =>
      setCourses(courses.filter((a) => a.id !== course.id))
    );
  };
  
  const onCreateNewCourse = () => {
    setOpenForm(true);
  };

const updateCourse = (updatedCourse) => {
    CoursesApi.updateCourse(updatedCourse)
      .then(r => getAll());
};

  return (
  <div>
         <div className="course-banner">
             Courses
             
         </div>
          <div className="horizontalline">
             </div>
     <div className="course-container">
         
       <div className="row-buttons">
          { openForm ? 
            <CourseForm onSubmit={createCourse} onCancel={onCancelCreateCourse} /> 
          
           : 
           <>
          {currentUser==='teacher' ? 
            <button
              className="create-coursebutton"
              onClick={onCreateNewCourse}>
              Create Course
            </button> : null
            }
            
            <CoursesList 
              courses={courses} 
              onCourseDelete={deleteCourse} 

              onCourseUpdate={updateCourse}
              currentUser = {currentUser}
            />
          </>
        }
      </div>
 
      </div>
     
 </div>
  );
}
export default CoursePage;

