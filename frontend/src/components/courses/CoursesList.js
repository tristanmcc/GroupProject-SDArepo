import React from 'react';
import Course from './Course';

function CoursesList({courses, onCourseDelete}) {
    return <div className="course-grid">
        {
          courses.map(course => (<Course 
                key={course.id}
                course={course}
                onCourseDelete={onCourseDelete}
                />)
         )  
        }
    </div>

}

export default CoursesList;