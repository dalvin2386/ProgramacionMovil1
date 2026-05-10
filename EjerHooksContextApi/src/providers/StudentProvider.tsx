import React, { useState } from 'react';
import { Student } from '../models/Student';
import { StudentContext } from '../context/StudentContext';

export function StudentProvider(props: any) {
  const [students, setStudents] = useState<Student[]>([
    { id: '1', name: 'Juan' },
    { id: '2', name: 'Maria' },
    { id: '3', name: 'Carlos' },
    { id: '4', name: 'Ana' },
    { id: '5', name: 'Luis' },
    { id: '6', name: 'Sofia' },
    { id: '7', name: 'Pedro' },
    { id: '8', name: 'Laura' },
    { id: '9', name: 'Diego' },
    { id: '10', name: 'Valentina' },
  ]);

  const agregar = (name: string) => {
    setStudents((prev) => [...prev, { id: String(prev.length + 1), name }]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent: agregar }}>
      {props.children}
    </StudentContext.Provider>
  );
}
