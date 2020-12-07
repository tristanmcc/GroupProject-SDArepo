import React from "react";
import Style from "../../CSS/homePage.css";
import {Link} from "react-router-dom";

//media
import carousel1 from "../../images/carousel-1.jpg";
import carousel2 from "../../images/carousel-2-jpg.jpg";
import carousel3 from "../../images/carousel-3.jpg";
import carousel4 from "../../images/carousel-4.jpg";
import carousel5 from "../../images/carousel-5.jpg";
import carousel6 from "../../images/carousel-6.jpg";
import Artboard from "../../images/Artboard+circles+3.png";
import CourseGraphic from "../../images/Light_bulb.png";
import Calender from "../../images/clock_icon.png";
import Students from "../../images/Bag_icon.png";
import chatIcon from "../../images/paper_airplane.png";
import assignmentIcon from "../../images/NoteBook_icon.png";
import videoIcon from "../../images/Play_button.png";
import apple from "../../images/apple.png";

function HomePage() {
    return (
        <div>
            <div className="home-banner">Home</div>
        <div class="row">
        <div class="column">
    <div class="card-nav1"><img src= {Calender} alt="Open Book" width="80" height="140"></img>Calender</div>
  </div>
  
  <div class="column">
  <Link to="/courses" className="nav-card">
    <div class="card-nav2"><img src= {CourseGraphic} alt="Open Book" width="80" height="140"></img>Courses</div>
    </Link>
  </div>
  
  <div class="column">
  <Link to="/assignments" className="nav-card">
    <div class="card-nav3"><img src= {assignmentIcon} alt="Open Book" width="80" height="140"></img>Assignments</div>
    </Link>
  </div>
  <div class="column">
  <Link to="/students" className="nav-card">
    <div class="card-nav4"><img src= {Students} alt="Open Book" width="80" height="140"></img>Students</div>
    </Link>
  </div>
  <div class="column">
  <Link to="/videos" className="nav-card">
    <div class="card-nav5"><img src= {videoIcon} alt="Open Book" width="80" height="140"></img>Lectures</div>
    </Link>
  </div>
  <div class="column">
  <Link to="/chat" className="nav-card">
    <div class="card-nav6"><img src= {chatIcon} alt="Open Book" width="80" height="140"></img>Communication</div>
    </Link>
  </div>
  <div class="column">
  <Link to="/resources" className="nav-card">
    <div class="card-nav7"><img src= {apple} alt="Open Book" width="80" height="140"></img>Resources</div>
    </Link>
  </div> 
</div>
            <div id="carouselExampleControls" class="carousel slide mb-4" data-ride="carousel">
            <div class="carousel-inner">
                      <div class="carousel-item active">
                              <img class="d-block w-100" src={carousel1} alt="First slide"></img>
                     </div>
                    <div class="carousel-item">
                                  <img class="d-block w-100" src={carousel2} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                               <img class="d-block w-100" src={carousel3} alt="Third slide"></img>
                    </div>
                    <div class="carousel-item">
                               <img class="d-block w-100" src={carousel4} alt="Fourth slide"></img>
                    </div>
                    <div class="carousel-item">
                               <img class="d-block w-100" src={carousel5} alt="Fifth slide"></img>
                    </div>
                    <div class="carousel-item">
                               <img class="d-block w-100" src={carousel6} alt="sixth slide"></img>
                    </div>
             </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
  <div>
      <img src={Artboard}/>
      </div>
      <div class="container mt-4 mb-5">
  <div class="row">
    <div class="col d-flex justify-content-center space-between">
    Students show learning:
Students use built-in annotation tools to capture what they know in Seesaw’s digital portfolio
    </div>
    <div class="col d-flex justify-content-center space-between">
    Teachers gain insights:
Teachers deeply understand 
student thinking and progress — enabling them to teach better
    </div>
    <div class="col d-flex justify-content-center space-between">
    Families connect:
Families gain a window into their student’s learning and engage with school happenings
    </div>
  </div>
</div>
        </div>
        
    );
}

export default HomePage;