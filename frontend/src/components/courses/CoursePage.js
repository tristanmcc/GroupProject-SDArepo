import React, {useState, useEffect} from "react";
import CourseCard from "./CourseCard";
import information from "../../information.json";
import AssignmentsApi from "../../api/AssignmentsApi";

function CoursePage() {
 
  const CourseCards = information.map((item) => {
    return <CourseCard key={item.id} data={item} />;
  });

  const [currentUser, setCurrentUser] = useState("");
  
  const getUserRole = () => {
   AssignmentsApi.getCurrentUser()
       .then(response => {
       setCurrentUser(response.data.userRole);
  })
}


useEffect(() => {
  getUserRole();
}, []);

  return (
    <div className="course-container">
      <div className="row-buttons">
        {currentUser === "teacher" ?
        <button className="btn btn-dark course-button"> CREATE COURSE</button>
        : null}
         {currentUser === "teacher" ?
        <button className="btn btn-dark course-button"> DELETE COURSE</button>
        : null}
         {currentUser === "teacher" ?
        <button className="btn btn-dark course-button"> UPDATE COURSE</button>
        : null}
      </div>

      <div className="course-grid">{CourseCards}</div>
    </div>
  );
}
export default CoursePage;

