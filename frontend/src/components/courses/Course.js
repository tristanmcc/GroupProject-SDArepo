// React course page
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import courseImg from "../../images/courses-icon.png";

export default function Course({ course, onCourseDelete }) {
  const { title, description } = course;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="course-card">
      <Link to={`/courseDetails`}>
         <img className="courseImage"  src={courseImg} alt={title} />
      </Link>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="description">{description}</p>
      </div>
      <div className="course-card-buttons">
        <button className="deleteButton" onClick={() => onCourseDelete(course)}><FontAwesomeIcon icon={faTrash}/></button>
        <button className="updateButton"><FontAwesomeIcon icon={faPen}/></button>
      </div>
    </div>
  );
}
