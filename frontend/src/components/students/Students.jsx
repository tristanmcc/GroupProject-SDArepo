import React, { useState, useEffect } from 'react';

import StudentCreateForm from './StudentCreateForm';
import StudentUpdateFrom from './StudentUpdateForm';
import StudentCard from './StudentCard';

import Api from '../../api/Api';

export default function Students() {
  const [student, setStudent] = useState([]);
  const [information, setInformation] = useState([]);

  const createStudent = (...studentInfo) => {
    Api.post('/students', ...studentInfo).then((res) =>
      setStudent([...student, res.data])
    );
  };
  

  const deleteStudent = (student) => {
    return Api.delete('/students/'+student.id)
              .then(r => getAllStudents());
    // .then(() =>
    //   setStudent(student.filter((a) => a.id !== student.id))
    // );
  };


const updatedStudent = (updatedStudent) => {
  console.log('I am in update API ' +updatedStudent)
    Api.put('/students/', updatedStudent)
        .then(r => getAllStudents());
};

  const getAllStudents = () => {
    Api.get(`/students`).then((res) => {
      setStudent(res.data.sort((a, b) => b.id - a.id));
    })
   };

  useEffect(() => {
    getAllStudents();
  },[]);

  return (
    <>
      <StudentCreateForm onCreateClick={createStudent} />
      {
        student.map(eachStudent => (<StudentCard 
                key={eachStudent.id}
                student={eachStudent}
                onStudentDelete={deleteStudent}
                onStudentUpdate={updatedStudent}
                />)
         )  
        }

    </>
  );
}
