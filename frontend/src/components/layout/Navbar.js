import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar ({ onLogout }) {

  const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      console.log('I am listening');
       if(link.style.animation){
        link.style.animation = '';
      }      
      else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /15}s`;
      }
    } );

    //Burger Animation
     burger.classList.toggle('BurgToggle');
  }

  return (
    <div>
    <nav>
      
      <div className="logo">
           Educational environment
        </div>
        <ul className="nav-links">
             <li >
               <a href="/" /* class="fas fa-home" */>
                 Home
               </a>
             </li>  
             <li >
               <a href="/courses" /* class="fas fa-book-open" */>
                 Courses

               </a>
             </li>
             <li>
              <a href="/scheduler" /* class="far fa-calendar-alt" */>
                Scheduler
              </a>
            </li>
             <li >
               <a href="/assignments" /* class="fas fa-tasks" */>
                 Assignments
               </a>
             </li>
             <li >
               <a href="/students" /* class="fas fa-user-graduate" */>
                 Students
               </a>
             </li>
             <li >
               <a href="/videos"  /* class="far fa-play-circle" */>
                 Lectures
               </a>
             </li>  
             <li >
               <a href="/chat" /* class="far fa-comments"  */>
                Chat
               </a>
             </li>
             <li >
               <a href="/resources" /* class="fas fa-dice-d20" */>
                Resources
               </a>
             </li>  
             <li >
               <a className="logout-button" /* class="fas fa-sign-out-alt" */ onClick={onLogout}>
                Logout
               </a>
             </li>  
           </ul>
           <div className="burger" onClick={navSlide}> 
             <div className="line1"></div>
             <div className="line2"></div>
             <div className="line3"></div>
            
           </div>
          
           {/* <button class="button1" 
             onClick={onLogout} >
           Logout
         </button> */}
    </nav>
    </div>
  )
}