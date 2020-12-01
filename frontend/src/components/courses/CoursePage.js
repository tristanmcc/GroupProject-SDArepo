import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import information from "../../information.json";
import CourseUpdateForm from './CourseUpdateForm.js';
import CoursesApi from "../../api/CoursesApi.js";
import AssignmentsApi from "../../api/AssignmentsApi";

function CoursePage() {
  //useState variables
  const [courses, setCourses] = useState([]);
  const [formState, setFormState]= useState(false);
  const [currentUser, setCurrentUser] = useState("");
  
  const createCourse = (courseData) => {
    CoursesApi.createCourse("", courseData)
            .then((res) => setCourses([...courses, res.data]));
  };
  const getAllCourses = () => {
    CoursesApi.getAllCourses("")
        .then(res => setCourses(res.data));
};

  const updateCourse = (updatedCourse) => {
    CoursesApi.put("", updatedCourse)
        .then(r => getAllCourses());
};

  const deleteCourse = (product) => {
    CoursesApi.delete("" + product.id)
          .then(r => getAllCourses());
}

useEffect(() => {
  getAllCourses();
  getUserRole();
}, []);

const getUserRole = () => {
  AssignmentsApi.getCurrentUser()
      .then(response => {
      setCurrentUser(response.data.userRole);
 })
}




// const CourseCards = information.map((item) => {
//      return <CourseCard key={item.id} data={item} />;
//    });
   
  
  return (
    <div className="course-container">
      <div className="row-buttons">
        {information.map((item) => {
     return < div>
       <CourseCard key={item.id} data={item} />
       {currentUser === "teacher" ?
       <button className="btn btn-dark course-button"
          onClick = {() => {
              setFormState(true);
        }}>UPDATE COURSE 
          </button>
          : null}
        {formState ? <CourseUpdateForm key={item.id} oldCourse={item} onUpdateClick = {updateCourse}/>: null }
       </div>
   })}
        {currentUser === "teacher" ?
        <button className="btn btn-dark course-button"> DELETE COURSE</button>: null}
      </div> 

         
      </div>
  );
}
export default CoursePage;

