import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function CourseForm({ onSubmit,onCancel }) {
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
            <label >Title:</label>
            <input 
              type="text" maxLength="12"
              className="form-control"
              placeholder="Title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <span>(12 char.max)</span>
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              className="form-control"
              placeholder="Course Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Create
            </button>
            <button
              className="btn btn-outline"
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
