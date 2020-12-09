import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../App.css";
import craft from '../../images/craft.png';
import sudoku from '../../images/sudoku.jpg';
import quiz from '../../images/quiz.png';
import yoga from '../../images/yoga.png';
import puzel from '../../images/puzzel.jpg';
import health from '../../images/healthtip.png';
import cook from '../../images/lilchef.png';
import googleclass from '../../images/googleclass.jpg';
import "../../CSS/resoursepage.css";
function ResoursePage() {
    return (
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
                <figcaption>  <b> PUZZEL</b></figcaption>  </a>
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
    );
}

export default ResoursePage;