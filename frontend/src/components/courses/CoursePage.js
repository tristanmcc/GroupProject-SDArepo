import React from "react";
import CourseCard from "./CourseCard";
import information from "../../information.json";

function CoursePage() {
  const CourseCards = information.map((item) => {
    return <CourseCard key={item.id} data={item} />;
  });

  return (
    <div className="course-container">
      <div className="row-buttons">
        <button className="btn btn-info course-button"> CREATE COURSE</button>

        <button className="btn btn-info course-button"> DELETE COURSE</button>

        <button className="btn btn-info course-button"> UPDATE COURSE</button>
      </div>

      <div className="course-grid">{CourseCards}</div>
    </div>
  );
}
export default CoursePage;
