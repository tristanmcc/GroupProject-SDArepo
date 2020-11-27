import React, { useState, useEffect } from 'react';

import StudentCreateForm from './StudentCreateForm';
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

  const getAllStudents = () => {
    Api.get(`/students`).then((res) => {
      const x = res.data.map((item) => (
        <StudentCard key={item.id} items={item} />
      ));

      setInformation(x);
    });
  };

  useEffect(() => {
    getAllStudents();
  }, [student]);

  return (
    <>
      <StudentCreateForm onCreateClick={createStudent} />
      <div>{information}</div>
    </>
  );
}
