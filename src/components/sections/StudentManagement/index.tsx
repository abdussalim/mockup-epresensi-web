import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';
import { Student } from '../../../types';
import { mockStudents } from '../../../utils/mockData';

const StudentManagement: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const handleAddStudent = (studentData: Omit<Student, 'id'>) => {
    const newStudent: Student = {
      ...studentData,
      id: Date.now().toString(),
    };
    setStudents([...students, newStudent]);
    setShowAddForm(false);
  };

  const handleUpdateStudent = (id: string, studentData: Omit<Student, 'id'>) => {
    setStudents(students.map(student => 
      student.id === id ? { ...studentData, id } : student
    ));
    setEditingStudent(null);
  };

  const handleDeleteStudent = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus siswa ini?')) {
      setStudents(students.filter(student => student.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Manajemen Data Siswa</h3>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Tambah Siswa
        </button>
      </div>
      
      {(showAddForm || editingStudent) && (
        <StudentForm
          student={editingStudent}
          onSubmit={editingStudent 
            ? (data) => handleUpdateStudent(editingStudent.id, data)
            : handleAddStudent
          }
          onCancel={() => {
            setShowAddForm(false);
            setEditingStudent(null);
          }}
        />
      )}
      
      <StudentTable
        students={students}
        onEdit={setEditingStudent}
        onDelete={handleDeleteStudent}
      />
    </div>
  );
};

export default StudentManagement;