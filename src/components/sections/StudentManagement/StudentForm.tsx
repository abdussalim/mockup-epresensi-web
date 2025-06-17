import React, { useState, useEffect } from 'react';
import { Student } from '@/types';
import { CLASS_LIST } from '@/utils/constants';

interface StudentFormProps {
  student?: Student | null;
  onSubmit: (data: Omit<Student, 'id'>) => void;
  onCancel: () => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ student, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<{
    name: string;
    nis: string;
    class: string;
    email: string;
    status: 'active' | 'inactive';
  }>({
    name: '',
    nis: '',
    class: '',
    email: '',
    status: 'active',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        nis: student.nis,
        class: student.class,
        email: student.email,
        status: student.status,
      });
    }
  }, [student]);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nama harus diisi';
    if (!formData.nis.trim()) newErrors.nis = 'NIS harus diisi';
    if (!formData.class) newErrors.class = 'Kelas harus dipilih';
    if (!formData.email.trim()) newErrors.email = 'Email harus diisi';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email tidak valid';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border-b bg-gray-50">
      <h4 className="text-lg font-semibold mb-4">
        {student ? 'Edit Data Siswa' : 'Tambah Siswa Baru'}
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`input ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Masukkan nama lengkap"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NIS <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`input ${errors.nis ? 'border-red-500' : ''}`}
            placeholder="Nomor Induk Siswa"
            value={formData.nis}
            onChange={(e) => setFormData({...formData, nis: e.target.value})}
          />
          {errors.nis && <p className="text-red-500 text-sm mt-1">{errors.nis}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kelas <span className="text-red-500">*</span>
          </label>
          <select 
            className={`select ${errors.class ? 'border-red-500' : ''}`}
            value={formData.class}
            onChange={(e) => setFormData({...formData, class: e.target.value})}
          >
            <option value="">Pilih Kelas</option>
            {CLASS_LIST.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
          {errors.class && <p className="text-red-500 text-sm mt-1">{errors.class}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className={`input ${errors.email ? 'border-red-500' : ''}`}
            placeholder="email@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <select 
            className="select"
            value={formData.status}
            onChange={(e) => setFormData({...formData, status: e.target.value as 'active' | 'inactive'})}
          >
            <option value="active">Aktif</option>
            <option value="inactive">Tidak Aktif</option>
          </select>
        </div>
      </div>
      
      <div className="mt-6 flex gap-2">
        <button type="submit" className="btn btn-primary">
          {student ? 'Update' : 'Simpan'}
        </button>
        <button type="button" onClick={onCancel} className="btn btn-secondary">
          Batal
        </button>
      </div>
    </form>
  );
};

export default StudentForm;