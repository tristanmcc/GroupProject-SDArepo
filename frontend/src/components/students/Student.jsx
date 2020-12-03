import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Student() {
   // const { name, age } = student;
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [show, setShow] = useState(false);
  return (
    <div className="student-card">
      <Link to={`/studentDetails`}>
      </Link>
      <div className="student-content">
        <h3 className="student-name"></h3>
        <p className="age"></p>
      </div>
      
    </div>
  );
}
