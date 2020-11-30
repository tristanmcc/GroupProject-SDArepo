import React, { useState } from "react";
import CourseCard from "./CourseCard";
import CourseForm from "./CourseForm";
import information from "../../information.json";

function CoursePage() {
  const [openForm, setOpenForm] = useState(false);
  const CourseCards = information.map((item) => {
    return <CourseCard key={item.id} data={item} />;
  });

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
            openForm ? <CourseForm onCancel={handleClose}/>
          
        :
        <>
        <button className="btn btn-info course-button" onClick={handleClickOpen}> CREATE COURSE</button>

        <button className="btn btn-info course-button"> DELETE COURSE</button>

        <button className="btn btn-info course-button"> UPDATE COURSE</button>
        </>
        }
        </div>

      <div className="course-grid">{CourseCards}</div>
    </div>
  );
}
export default CoursePage;
