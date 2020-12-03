import React from 'react';
import Course from './Course';

function CoursesList({courses, onCourseDelete, onCourseUpdate}) {
    return <div className="course-grid">
        {
          courses.map(course => (<Course 
                key={course.id}
                course={course}
                onCourseDelete={onCourseDelete}
                onCourseUpdate={onCourseUpdate}
                />)
         )  
        }
    </div>

}

export default CoursesList;