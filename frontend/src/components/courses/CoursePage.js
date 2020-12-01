import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
// import information from "../../information.json";
import CoursesApi from "../../api/CoursesApi";
import CoursesList from "./CoursesList";

function CoursePage() {
  const[courses, setCourses] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  /* const CourseCards = information.map((item) => {
    return <Course key={item.id} course={item} />;
  }); */

  const getAll = () => {
      CoursesApi.getAllCourses()
        .then((res) => {
            setCourses(res.data.sort((a,b) => b.id - a.id));
        })
  }

  useEffect(() => {
      console.log("get all courses",getAll());
    getAll();   
  }, []);


  const handleClickOpen = () => {
      setOpenForm(true);
  }

  const handleClose = () => {
      setOpenForm(false);
  }


  return (
    <div className="course-container">
      <div className="row-buttons">
        
        { 
            openForm ? <CourseForm open={openForm} onClose={handleClose}/>
          
        :
        <>
        <button className="btn btn-info course-button" onClick={handleClickOpen}> CREATE COURSE</button>

        <button className="btn btn-info course-button"> DELETE COURSE</button>

        <button className="btn btn-info course-button"> UPDATE COURSE</button>
        </>
        }
        </div>
       
        <CoursesList
            courses={courses}
            
        />
        
     
    </div>
  );
}
export default CoursePage;
