import React from "react";
import { Link } from "react-router-dom";
import Coursedetails from "./Coursedetails";

//<!--<link rel="stylesheet" href="https://sdaproject.se/training-wheels.css" />-->
import '../../CSS/styles.css';
import bookpic  from "../../CSS/images/book.jpg";
import  history  from "../../CSS/images/history.jpeg";
import  social  from "../../CSS/images/social.jpeg";
import  science  from "../../CSS/images/science.jpeg";
import  english  from "../../CSS/images/english.jpeg";

function CoursePage() {
    return (
  <div >
     <section class="courses">

     <div class="gallery">
         <figure>
           <img src={history} alt="historypic"  />
         </figure>    
          <a className="nav-item">
             <Link to="/coursedetails" className="nav-link"> <button class="btn btn-primary btn-sm mt-2" type="submit" >HISTORY </button> 
         </Link> </a>     
     </div>

     <div class="gallery">
         <figure>
           <img src={science} alt="sciencepic"  />
         </figure>    
          <a className="nav-item"> <Link to="/coursedetails" className="nav-link"> <button class="btn btn-primary btn-sm mt-2" type="submit" >SCIENCE</button>  </Link> </a>          
     </div>

     <div class="gallery">
         <figure>
           <img src={social} alt="socailpic"  />
         </figure>    
          <a className="nav-item"> <Link to="/coursedetails" className="nav-link"> <button class="btn btn-primary btn-sm mt-2" type="submit" >SOCIAL</button> </Link> </a>     
     </div>


     <div class="gallery">
         <figure>
           <img src={english} alt="englishpic"  />
         </figure>    
         
          <a className="nav-item"><Link to="/coursedetails" className="nav-link"> <button class="btn btn-primary btn-sm mt-2" type="submit" >ENGLISH </button> </Link> </a>      
     </div>
  </section>
  <section>
       <div className="course-button-function">
             <button className="btn btn-info"  > CREATE COURSE</button>
              </div>
       <div className="form-group">
             <button className="btn btn-info"  > DELETE COURSE</button>
      </div>
      <div className="form-group">
             <button className="btn btn-info"  > UPDATE COURSE</button>
      </div>
      </section>
   
  </div>

    );
}
export default CoursePage;  





