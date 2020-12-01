// React course page
import React from "react";
import { Link } from "react-router-dom";
import courseImg from "../../images/courses-icon.png";

export default function Course({ course }) {
  const { title, description } = course;

  return (
    <div className="course-card">
      <Link to={`/courseDetails`}>
         <img className="courseImage"  src={courseImg} alt={title} />
      </Link>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
