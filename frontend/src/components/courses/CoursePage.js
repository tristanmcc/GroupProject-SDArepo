import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import information from "../../information.json";
import CourseUpdateForm from './CourseUpdateForm.js';
import CoursesApi from "../../api/CoursesApi.js";

function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [formState, setFormState]= useState(false);
  
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
}, []);

// const CourseCards = information.map((item) => {
//      return <CourseCard key={item.id} data={item} />;
//    });
   
  
  return (
    <div className="course-container">
      <div className="row-buttons">
        <button className="btn btn-dark course-button"> CREATE COURSE</button>
        
        
        {information.map((item) => {
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
        
        <button className="btn btn-dark course-button"> DELETE COURSE</button>
      </div> 

         
      </div>
  );
}
export default CoursePage;
