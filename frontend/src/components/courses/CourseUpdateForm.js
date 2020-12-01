import React, { useState } from 'react'

export default function CourseUpdateForm( {oldCourse, onUpdateClick}) {
    const [title, setTitle] = useState(oldCourse.title);
    const [description, setDescription] = useState(oldCourse.description);
        return (
          <div> 
            <form>
                <label>Title Name : </label>
                <input name="title" type="text"
                value={title} onChange={e=> setTitle(e.target.value)}/>
      
                <label>Description : </label>
                <input name="description" type="text"/>
      
                <label>Update Date : </label>
                <input name="date" type="text"/>
           </form>
           </div>
          );
      }