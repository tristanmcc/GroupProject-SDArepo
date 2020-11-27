import React, { useState } from 'react';

import StudentCreateForm from './StudentCreateForm';
import StudentCard from './StudentCard';

import Api from '../../api/Api';

export default function Students() {
  const [student, setStudent] = useState([]);

  const createStudent = (...studentInfo) => {
    Api.post('/students', ...studentInfo).then((res) =>
      setStudent([...student, res.data])
    );
  };

  const getAllStudents = () => {
    Api.get(`/students`).then((res) => {
      setStudent(res.data);
    });
  };

  return (
    <>
      <StudentCreateForm onCreateClick={createStudent} />
      <StudentCard onGetClick = {getAllStudents} student={student} />
    </>
  );
}
