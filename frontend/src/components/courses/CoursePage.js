import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import CourseForm from "./CourseForm";

import CoursesApi from "../../api/CoursesApi";
import CoursesList from "./CoursesList";

function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  

  const getAll = () => {
    CoursesApi.getAllCourses().then((res) => {
      setCourses(res.data.sort((a, b) => b.id - a.id));
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  const createCourse = (courseData) => {
    return CoursesApi.createCourse(courseData).then((res) => {
      setCourses([res.data, ...courses]);
      // setOpenForm(false);
    });
  };

  const onCancelCreateCourse = () => {
    setOpenForm(false);
  };

  const onCreateNewCourse = () => {
    setOpenForm(true);
  };

  const deleteCourse = (course) => {
    console.log("course details", course.id);
    return CoursesApi.deleteCourse(course.id).then(() =>
      setCourses(courses.filter((a) => a.id !== course.id))
    );
  };



  return (
    <div className="course-container">
      <div className="row-buttons">
         { openForm ? 
          <CourseForm onSubmit={createCourse} onCancel={onCancelCreateCourse} /> 
        
         : 
          <>
            <button
              className="btn btn-info course-button"
              onClick={onCreateNewCourse}>
              CREATE COURSE
            </button>
            <CoursesList 
              courses={courses} 
              onCourseDelete={deleteCourse} 
            />
          </>
        }
      </div>

     
    </div>
  );
}
export default CoursePage;
