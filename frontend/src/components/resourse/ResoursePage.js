import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../css/resoursepage.css";

import craft from '../../images/resource_image/craft.png';
import sudoku from '../../images/resource_image/sudoku.jpg';
import quiz from '../../images/resource_image/quiz.png';
import yoga from '../../images/resource_image/yoga.png';
import puzel from '../../images/resource_image/puzzel.jpg';
import health from '../../images/resource_image/healthtip.png';
import cook from '../../images/resource_image/lilchef.png';
import googleclass from '../../images/resource_image/googleclass.jpg';


function ResoursePage() {
    return (
    <div> 
      <div className="resourse-banner"> 
           Resourse  
      </div>
      <div className="horizontalline">
      </div>
 <div className="resourseimg">
     <div className="images">       
        <figure>
        <img className="craftimage"  src={craft} />
           <a    href="http://tiny.cc/craftforkidss">
          <figcaption>  <b> ART & CRAFT</b></figcaption>  </a>  
        </figure>
        
        <figure>
        <img className="yogaimage"  src={yoga} />
           <a    href="https://cosmickids.com">
          <figcaption>  <b> YOGA</b></figcaption>  </a>  
        </figure>
            <figure>
               <img className="sudokuimage"  src={sudoku} />
                  <a    href="https://www.sudokuonline.io/kids">
                  <figcaption>  <b> SUDOKU </b></figcaption>  </a>  
             </figure>
   
             <figure>
                <img className="quizimage"  src={quiz} />
                <a    href="  https://www.kidzworld.com/quizzes">
                <figcaption>  <b> QUIZ </b></figcaption>  </a>
             </figure>
        
              <figure>
                <img className="puzelimage"  src={puzel} />
                <a    href="https://www.digipuzzle.net/main/kids/">
                <figcaption>  <b> PUZZLE</b></figcaption>  </a>
              </figure>
              <figure>
                <img className="healthimage"  src={health} />
                <a    href="https://www.healthforkids.co.uk">
                <figcaption>  <b> HEALTH TIPS</b></figcaption>  </a>
              </figure>
              <figure>
                <img className="cookimage"  src={cook} />
                <a    href="http://tiny.cc/firelesscook">
                <figcaption>  <b> FIRELESS COOKING</b></figcaption>  </a>
              </figure>
              <figure>
                <img className="googleclassimage"  src={googleclass} />
                <a    href="https://classroom.google.com/h">
                <figcaption>  <b> GOOGLE CLASSROOM </b></figcaption>  </a>
              </figure>
          </div>   
     </div>
     </div>    
    );
}

export default ResoursePage;