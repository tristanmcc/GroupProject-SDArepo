import React from "react";
import { Link } from "react-router-dom";

function CoursePage() {
        
    return (
        <div>
            <Link to= {`/courseDetails`}>
                <button  className=" btn btn-info btn-sm">
                        click here to connect to course details page
                </button>
            </Link>
        </div>
    );
}

export default CoursePage;