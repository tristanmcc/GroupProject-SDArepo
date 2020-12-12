import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../../css/course.css";


function CourseForm({ onSubmit, onCancel }) {
  console.log("course form");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  const onCreateCourseClick = (e) => {
    const courseData = { title, description };
    onSubmit(courseData).catch((err) => {
      alert("error occured");
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card mt-4">
      <div className="course-card-body">
        <h4 className="course-card-title">{"Create a course"}</h4>
        <form onSubmit={onCreateCourseClick}>
          <div className="form-group">
            <label >Title: <span>(12 char)</span></label>
            <input className="input-update"
              type="text" maxLength="12"
              className="form-control"
              placeholder="Title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
           
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea  className="input-update"
              className="form-control"
              placeholder="Course Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <button className="createnewcoursebutton" type="submit">
              Create
            </button>
            <button
              className="cancelnewcoursebutton"
              type="button"
              onClick={onCancel} >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseForm;
