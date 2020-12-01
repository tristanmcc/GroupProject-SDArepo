import React from 'react';
import Course from './Course';

function CoursesList({courses}) {
    return <div className="course-grid">
        {
          courses.map(course => (<Course 
                key={course.id}
                course={course}
                />)
         )  
        }
    </div>

}

export default CoursesList;