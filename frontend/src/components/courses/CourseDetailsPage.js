import React from 'react';
import { Link } from "react-router-dom";
import "../../App.css";

export default function CourseDetailsPage() {
    return (
        <div>
            <Link to= {`/courses`}>
                <button  className=" btn btn-info btn-sm">
                        courses
                </button>
            </Link>
            <div className="container">
                <div className="row">
                    <h1 className="courseDetails-title">Course Details </h1>
                    <p className="courseDetails-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
            </div>
          
        </div>
    );
}