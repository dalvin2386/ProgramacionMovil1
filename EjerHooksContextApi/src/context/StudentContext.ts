import { createContext } from 'react';
import { Student } from '../models/Student';

interface StudentContextType {
  students: Student[];
  addStudent: (name: string) => void;
}

export const StudentContext = createContext<StudentContextType>({
  students: [],
  addStudent: () => {},
});
