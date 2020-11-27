// React core
import React from "react";
import { Link } from "react-router-dom";
import maths from '../../images/maths.png';

// Note the curly braces around props, to allow to prepare to break down the object into individual variables
export default function CourseCard({ data }) {
  // Here is where we do the break down the data
  const {
    id,
    category,
    title,
    description,
    thumbnail,
  } = data;

  return (
    <div className="course-card">
      <Link to={`/courseDetails`}>
      
        <img className="courseImage" src= {maths} alt={description}></img>
      </Link>
      <div className="card-content">
          <h3 className="card-title">{title}</h3>
          {/* <p className="description">{description}</p> */}
         
      </div>
    </div> 

   

    
  );
}
