// React core
import React from "react";
import { Link } from "react-router-dom";
import maths from "../../images/maths.png";

export default function CourseCard({ data }) {
  const { id, title, description, thumbnail } = data;

  return (
    <div className="course-card">
      <Link to={`/assignmentsViewForCourse/${id}`}>
      
      <div className="card-content">
        <h3 className="course-card-title">{title}</h3>
        {/* <p className="description">{description}</p>  */}
      </div>
      </Link>
    </div>
  );

}

 

