// React course page
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import courseImg from '../../images/courses-icon.png';
import CourseUpdateForm from './CourseUpdateForm.js';


export default function Course({ course, onCourseDelete, onCourseUpdate, currentUserRole }) {
  const { id,title, description } = course;
  const [formState, setFormState] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [show, setShow] = useState(false);

 


  const onCancelUpdate = () => {
    setFormState(false);
  };

  return (
    <div className="course-card">

      
      <Link to={`/courseDetail/${id}`}>
         <img className="courseimage"  src={courseImg} alt={title} />
      </Link>
   
      <div className="">
        <h3 className="course-card-title">{title}</h3>
       
        { /*  <p className="description">{description}</p>*/} 
      </div>
     
       
      <div className="course-card-buttons">
      
        {currentUserRole==='teacher' ? 
        <div>  
          <button className="create-deleteButton" onClick={() => onCourseDelete(course)}>
            <FontAwesomeIcon icon={faTrash} /> 
          </button>       

             <button className="create-updateButton" onClick={() => setFormState(true)}>
             <FontAwesomeIcon icon={faPen} />
             </button>
          
        </div> : null}
        {formState ? (
          <CourseUpdateForm
            key={course.id}
            changeFormState={setFormState}
            oldCourse={course}
            onCourseUpdate={onCourseUpdate}
            onCancelUpdate={onCancelUpdate}
          />
        ) : null}
      </div>
    </div>
  );
}
