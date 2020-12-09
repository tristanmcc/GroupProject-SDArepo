// React course page
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import courseImg from '../../images/Course_book.png';
import CourseUpdateForm from './CourseUpdateForm.js';
import { Tooltip } from '@material-ui/core';
import '../../CSS/course.css';
export default function Course({
  course,
  onCourseDelete,
  onCourseUpdate,
  currentUserRole,
}) {
  const { id, title, description } = course;
  const [formState, setFormState] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [show, setShow] = useState(false);


  const [isShown, setIsShown] = useState(false);


  const onCancelUpdate = () => {
    setFormState(false);
  };

  return (

  <div className="course-card">
                <div className="courselinkimage">
              <Link to={`/courseDetail/${id}`}>
                <img className="courseimage"  src={courseImg} alt={title} />  
                {/* <img className="courseimage"  src={courseImg} alt={title} />  */}
               </Link>
               </div>
               <div className="courseheader">
                <h3 className="course-card-title">{title}</h3>
               { /*  <p className="description">{description}</p>*/}
            </div> 
  
                   
   {/*   <div
      className="course-card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}  >
   {isShown && (
        <p
          style={{
            display: 'block',
            fontSize: '12px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          click to navigate to assignments
        </p>
      )}  
      <Link to={`/courseDetail/${id}`}>
        <img className="courseImage" src={courseImg} alt={title} />
      </Link>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
            <p className="description">{description}</p>
      </div> */} 

      <div className="course-card-buttons">
        {currentUserRole === 'teacher' ? (
          <div>
            <button
              className="create-deleteButton"
              onClick={() => onCourseDelete(course)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="create-updateButton" onClick={() => setFormState(true)}>
              <FontAwesomeIcon icon={faPen} />
            </button>
          </div>
        ) : null}
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
