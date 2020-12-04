// React course page
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import courseImg from "../../images/courses-icon.png";
import CourseUpdateForm from './CourseUpdateForm.js';


export default function Course({ course, onCourseDelete, onCourseUpdate }) {
  const { id, title, description } = course;
  const [formState, setFormState]= useState(false);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [show, setShow] = useState(false);

  const onCancelUpdate =() => {
    setFormState(false);
  }

  return (
    <div className="course-card">
      <Link to={`/courseDetail/${id}`}>
         <img className="courseImage"  src={courseImg} alt={title} />
      </Link>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="description">{description}</p>
      </div>
      <div className="course-card-buttons">
        <button className="deleteButton" onClick={() => onCourseDelete(course)}><FontAwesomeIcon icon={faTrash}/></button>
        <button className="updateButton" onClick={() => setFormState(true)}><FontAwesomeIcon icon={faPen}/></button>
        {formState ? <CourseUpdateForm key={course.id} changeFormState={setFormState} oldCourse={course} onCourseUpdate = {onCourseUpdate} onCancelUpdate={onCancelUpdate}/>: null }
    
      </div>
    </div>
  );
}
