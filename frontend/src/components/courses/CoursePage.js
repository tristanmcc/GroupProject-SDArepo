import React from "react";
import CourseCard from "./CourseCard";
import information from '../../information.json';
import { Link } from "react-router-dom";

function CoursePage() {
    const CourseCards = information.map((item) => {
        return <CourseCard key={item.id} data={item} />;
    });

    console.log("card details",CourseCards);
  return (
    <div className="course-container">
     
        <div className="row-buttons">
          <button className="btn btn-info course-button"> CREATE COURSE</button>
        
          <button className="btn btn-info course-button"> DELETE COURSE</button>
        
          <button className="btn btn-info course-button"> UPDATE COURSE</button>
        </div>
     
      
      <div className="course-grid">
          {CourseCards}
      </div>
      {/* <Link to={`/courseDetails`}>
        <button className=" btn btn-info btn-sm course-details">
          click here to connect to course details page
        </button>
      </Link> */}
    </div>
  );
}
export default CoursePage;
