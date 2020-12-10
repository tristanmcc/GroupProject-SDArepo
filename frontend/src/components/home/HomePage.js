import React from "react";
import Style from "../../css/homePage.css";
import {Link} from "react-router-dom";

//media
import CourseGraphic from "../../images/Icons/Light_bulb.png";
import Calender from "../../images/Icons/clock_icon.png";
import Students from "../../images/Icons/Bag_icon.png";
import chatIcon from "../../images/Icons/paper_airplane.png";
import assignmentIcon from "../../images/Icons/NoteBook_icon.png";
import videoIcon from "../../images/Icons/Play_button.png";
import apple from "../../images/Icons/apple.png";
import '../../css/homePage.css';
import bee from '../../images/Resource_Image/graduationBee.png';


function HomePage() {
    return (
<div>
            <div className="home-banner">Home</div>
              <div className="horizontalline"> </div>
   <div className="row">
          <div className="column">
            <div className="card-nav1"><img src= {Calender} alt="Open Book" width="80" height="140"></img>Calender</div>
           </div>
  
       <div className="column">
         <Link to="/courses" className="nav-card">
          <div className="card-nav2"><img src= {CourseGraphic} alt="Open Book" width="80" height="140"></img>Courses</div>
         </Link>
        </div>
  
       <div className="column">
        <Link to="/assignments" className="nav-card">
         <div className="card-nav3"><img src= {assignmentIcon} alt="Open Book" width="80" height="140"></img>Assignments</div>
         </Link>
      </div>
      <div className="column">
        <Link to="/students" className="nav-card">
         <div className="card-nav4"><img src= {Students} alt="Open Book" width="80" height="140"></img>Students</div>
         </Link>
       </div>
       <div className="column">
        <Link to="/videos" className="nav-card">
        <div className="card-nav5"><img src= {videoIcon} alt="Open Book" width="80" height="140"></img>Lectures</div>
         </Link>
      </div>
      <div className="column">
       <Link to="/chat" className="nav-card">
         <div className="card-nav6"><img src= {chatIcon} alt="Open Book" width="80" height="140"></img>Forum</div>
        </Link>
      </div>
      <div className="column">
       <Link to="/resources" className="nav-card">
        <div className="card-nav7"><img src= {apple} alt="Open Book" width="80" height="140"></img>Resources</div>
       </Link>
      </div> 
   </div>
    
    <>
    <div className="horizontalline1"> </div>
           <div className="homepageanouncement">
              <div >
             
                  <div className="homepageanouncement1" >
                  
          
                   <h2>Announcement  !!!</h2> </div>
                  <p>  There are two new lectures to watch and onw new assigenment to complete!!! </p>
             </div> 
             </div>
             <img className="bee"  src={bee} alt={bee}/> 
       </>    
 </div>
        
    );
}

export default HomePage;
