import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../css/styles.css";

import type from '../../images/resource_image/typing.png';
import splash from '../../images/resource_image/SplashLearn.png';
import quiz from '../../images/resource_image/quiz.png';
import noodle from '../../images/resource_image/gonoodle.png';
import kahoot from '../../images/resource_image/kahoot.png';
import dojo from '../../images/resource_image/dojo.png';
import duo from '../../images/resource_image/Duolingo.png';
import googleclass from '../../images/resource_image/googleclass.jpg';


function ResoursePage() {
    return (
    <div> 
      <div className="resourse-banner"> 
           Resources 
      </div>
      <div className="horizontalline">
      </div>
 <div className="resourseimg">
     <div className="images">       
        <figure>
           <a    href="http://tiny.cc/type11"  >
           <img className="type"  src={type} />
           <figcaption>  <b> Typing Club</b></figcaption> 
           </a> 
           
        </figure>
        
        <figure>
           <a    href="http://tiny.cc/splashlearn1">
           <img className="splash"  src={splash} />
           <figcaption>  <b> Splash Learn</b></figcaption>
            </a>  
            
        </figure>

         <figure>
             <a    href="http://tiny.cc/noodle1">
              <img className="noodle"  src={noodle} />
              <figcaption>  <b> Go Noodle </b></figcaption>
                </a>  
                 
          </figure>
   
             <figure>               
                <a    href="  http://tiny.cc/quizztime">
                <img className="quizimage"  src={quiz} />
                <figcaption>  <b> QUIZ </b></figcaption>  </a>
             </figure>
        
              <figure>
                <a    href="https://kahoot.it">
                  <img className="kahoot"  src={kahoot} />
                <figcaption>  <b> Khoot</b></figcaption>  </a>
              </figure>

              <figure>           
                <a    href="http://tiny.cc/dojo1">
                <img className="dojo"  src={dojo} />
                <figcaption>  <b>Class DO Jo</b></figcaption>  </a>
              </figure>
              <figure>
                <a    href="http://tiny.cc/duo1">
                <img className="duolingo"  src={duo} />
                <figcaption>  <b> Duolingo</b></figcaption>  </a>
              </figure>
              <figure>         
                <a    href="https://classroom.google.com/h">
                <img className="googleclassimage"  src={googleclass} />
                <figcaption>  <b> GOOGLE CLASSROOM </b></figcaption>  </a>
              </figure>
          </div>   
     </div>
     </div>    
    );
}

export default ResoursePage;