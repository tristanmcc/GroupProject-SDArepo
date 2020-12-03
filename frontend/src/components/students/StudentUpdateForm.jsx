import React, { useState } from 'react'

export default function StudentUpdateForm( {oldStudent, onUpdateClick}) {
    const [name, setName] = useState(oldStudent.name);
    const [age, setage] = useState(oldStudent.age);
        return (
          <div> 
            <form>
                <label>Name : </label>
                <input name="studentName" type="text"
                value={name} onChange={e=> setName(e.target.value)}/>
      
                <label>Age : </label>
                <input name="age" type="num"/>
      
           </form>
           </div>
          );
      }