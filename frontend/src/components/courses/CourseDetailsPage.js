import React, { useState, useEffect } from "react";
import AssignmentsView from "../assignments/AssignmentsView";
import CoursesApi from "../../api/CoursesApi";
import UserApi from "../../api/UserApi";
import Videos from "../videos/VideosPage";
import VideoUpLoadForm from "../videos/VideoUploadForm";
import AssignmentsPage from "../assignments/AssignmentsPage";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import "../../css/styles.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#25274D",
    cursor: "pointer",
    textDecoration: "none",
    borderRadius: 15,
    boxShadow: [[0, 9, "#999"]],
    "&:hover": {
      backgroundColor: "#464866 !important",
    },
    "&:active": {
      backgroundColor: "#3e8e41 !important",
      boxShadow: [[0, 5, "#666"]],
      transform: "translateY(4) !important",
    },
  },
  uploadButton: {
    margin: theme.spacing(1),
    color: "white",
    cursor: "pointer",
    outline: "none",
    border: "none",
    borderRadius: 15,
    transform: "translateY(4)",
    boxShadow: [[0, 5, "#999"]],
    backgroundColor: "#25274D",
    "&:hover": {
      backgroundColor: "#464866 !important",
    },
  },
}));

export default function CourseDetailsPage({ match }) {
  const courseId = match.params.id;
  const [course, setCourse] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [openForm, setOpenForm] = useState(true);
  const [openLectureForm, setOpenLectureForm] = useState(true);

  const classes = useStyles();

  const onCreateNewAssignment = () => {
    setOpenForm(false);
  };

  const onUploadVideo = () => {
    setOpenLectureForm(false);
  };

  const getCourseById = (courseId) => {
    CoursesApi.getCourseById(courseId).then((res) => {
      setCourse(res.data);
    });
  };

  //Get userRole call
  const getUserRole = () => {
    UserApi.getCurrentUser().then((response) => {
      setCurrentUser(response.data);
    });
  };

  useEffect(() => {
    getCourseById(courseId);
    getUserRole();
  }, []);

  return (
    <>
    <div className="course-details-description">
             <h3 className="course-description">
             Course Details page - {course.description}{" "}
              </h3>
                {/* <p>{course.description}</p> */}
           </div>
  <div className="coursedetailscontainer" >
    
    <div className="course-details">
      <div className="course-details-description">
        <h3 className="course-description">
          {course.title}
        </h3>
      </div>
      
      <div className="course-details-text">
       {<p>{course.description}</p>}
       </div>
      
      <div className="course-details-section">
        <div>
          <div className="assignment-details">
            {openForm ? (
              <>
                <AssignmentsView course={course} currentUser={currentUser} />
                {currentUser.userRole === "teacher" ? (
                  <Link to={`/assignmentsViewForCourse/${courseId}`}>
                    <div className="assignment-addNew">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                        onClick={onCreateNewAssignment}
                      >
                        Add New Assignment
                      </Button>
                    </div>
                  </Link>
                ) : null}
              </>
            ) : (
              <AssignmentsPage course={course} currentUser={currentUser} />
            )}
            {currentUser.userRole === "teacher" ? (
              <Link to={`/assignmentsSubmittedView`}>
                <div className="assignment-view">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                    onClick={onCreateNewAssignment}
                     >
                    View Submitted Assignment
                  </Button>
                </div>
              </Link>
            ) : null}
          </div>
          <div className="lecture-details">
            <div className="check">
              {openLectureForm ? (
                <>
                  <Videos course={course} currentUser={currentUser} />
                </>
              ) : (
                <VideoUpLoadForm course={course} currentUser={currentUser} />
              )}
            </div>
            <div className="buttonCheck">
              <Button
                variant="contained"
                color="default"
                className={classes.uploadButton}
                endIcon={<Icon>send</Icon>}
                onClick={onUploadVideo}
              >
                Add new video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> 
    </>   
  );
}
