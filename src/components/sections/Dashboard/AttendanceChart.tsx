import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AttendanceChart: React.FC = () => {
  const attendanceData = [
    { name: 'Sen', hadir: 1156, terlambat: 23, absen: 66 },
    { name: 'Sel', hadir: 1200, terlambat: 15, absen: 30 },
    { name: 'Rab', hadir: 1180, terlambat: 20, absen: 45 },
    { name: 'Kam', hadir: 1190, terlambat: 25, absen: 30 },
    { name: 'Jum', hadir: 1170, terlambat: 18, absen: 57 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Tren Kehadiran Mingguan</h3>
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Minggu Ini</option>
          <option>Minggu Lalu</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={attendanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="hadir" fill="#4CAF50" name="Hadir" />
          <Bar dataKey="terlambat" fill="#FF9800" name="Terlambat" />
          <Bar dataKey="absen" fill="#F44336" name="Absen" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;