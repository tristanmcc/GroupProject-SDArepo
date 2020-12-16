import React from "react";
import Style from "../../css/homePage.css";
import { Link } from "react-router-dom";

//media
import CourseGraphic from "../../images/Icons/undraw_Bookshelves_re_lxoy (1).png";
import Calender from "../../images/Icons/undraw_Booking_re_gw4j (1).png";
import Students from "../../images/Icons/undraw_true_friends_c94g (1).png";
import chatIcon from "../../images/Icons/undraw_Chatting_re_j55r (1).png";
import assignmentIcon from "../../images/Icons/undraw_Personal_notebook_re_d7dc (1).png";
import videoIcon from "../../images/Icons/undraw_online_media_62jb (2).png"; 
import apple from "../../images/Icons/undraw_mobile_apps_spmp (2).png";
import "../../css/styles.css";
import happyKids from '../../images/edvin-johansson-UGGinojhaC0-unsplash.jpg'
import introductoryText from '../../images/introductionText.jpg'

function HomePage() {
  return (
    <div>
      

      <div class="row">
        <div class="column">
          <Link to="/scheduler" className="nav-card">
            <div class="card-nav1">
              <img src={Calender} alt="Open Book" ></img>
              Scheduler
            </div>
          </Link>
        </div>

        <div className="column">
          <Link to="/courses" className="nav-card">
            <div className="card-nav2">
              <img
                src={CourseGraphic}
                alt="Open Book"
                
              ></img>
              Courses
            </div>
          </Link>
        </div>

        <div className="column">
          <Link to="/assignments" className="nav-card">
            <div className="card-nav3">
              <img
                src={assignmentIcon}
                alt="Open Book"
              ></img>
              Assignments
            </div>
          </Link>
        </div>
        <div className="column">
          <Link to="/students" className="nav-card">
            <div className="card-nav4">
              <img src={Students} alt="Open Book" ></img>
              Students
            </div>
          </Link>
        </div>
        <div className="column">
          <Link to="/videos" className="nav-card">
            <div className="card-nav5">
              <img
                src={videoIcon}
                alt="Open Book"
                
              ></img>
              Lectures
            </div>
          </Link>
        </div>
        <div className="column">
          <Link to="/chat" className="nav-card">
            <div className="card-nav6">
              <img src={chatIcon} alt="Open Book" ></img>
              Forum
            </div>
          </Link>
        </div>
        <div className="column">
          <Link to="/resources" className="nav-card">
            <div className="card-nav7">
              <img src={apple} alt="Open Book" ></img>
              Resources
            </div>
          </Link>
        </div>
      </div>

      
      <div className="home-column">
        <div className="homepage"> <h3>Your students work at their levels</h3>
        <p>
        With a growing number of school closures due to COVID-19, we want to ensure 
        your students still have access to valuable learning resources at home. This 
        is a guide for parents and families who would like to use Freckle to keep their
        kids engaged in learning during these challenging times.</p>


        <p>Freckle is an online learning platform that allows students to practice Math and 
        English Language Arts at their own level. Freckle continuously adapts to each student’s 
        individual skills, so each student is getting the appropriate challenge, whether they’re 
        working at, above, or below grade level. Depending on the level of instruction your school
        is providing during school closures, your child’s.</p> </div>
      <img className="happKids"  src={happyKids} />
      </div>

    </div>
  );
}

export default HomePage;
