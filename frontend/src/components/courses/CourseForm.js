import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../../css/styles.css";


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
    <div className="course-create-form">
            <div className="course-card-form-title">
                  <h4> CREATE COURSE</h4>
               </div>
        <div className="course-card-body">
              <form onSubmit={onCreateCourseClick}>
              <div className="course-form-group">
                <label>Title:</label>
                <input className="input-update"
                 type="text" maxLength="12"
                className="form-control"
                placeholder="Title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
               />
              </div>

          <div className="course-form-group">
            <label>Description:</label>
            <textarea  className="input-update"
              className="form-control"
              placeholder="Course Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="course-form-buttons">
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
