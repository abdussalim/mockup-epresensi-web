import React, { useState } from 'react';
import { Download, TrendingUp, Users, Clock, AlertCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Reports: React.FC = () => {
  const [reportPeriod, setReportPeriod] = useState('month');
  const [reportType, setReportType] = useState('attendance');

  const monthlyData = [
    { month: 'Jan', kehadiran: 95, target: 95 },
    { month: 'Feb', kehadiran: 93, target: 95 },
    { month: 'Mar', kehadiran: 96, target: 95 },
    { month: 'Apr', kehadiran: 94, target: 95 },
    { month: 'Mei', kehadiran: 97, target: 95 },
    { month: 'Jun', kehadiran: 95, target: 95 },
  ];

  const classData = [
    { class: 'X MIPA', kehadiran: 96, keterlambatan: 2, absen: 2 },
    { class: 'XI MIPA', kehadiran: 94, keterlambatan: 3, absen: 3 },
    { class: 'XII MIPA', kehadiran: 95, keterlambatan: 2, absen: 3 },
    { class: 'X IPS', kehadiran: 93, keterlambatan: 4, absen: 3 },
    { class: 'XI IPS', kehadiran: 94, keterlambatan: 3, absen: 3 },
    { class: 'XII IPS', kehadiran: 96, keterlambatan: 1, absen: 3 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Laporan & Analytics</h3>
          <button className="btn btn-primary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Periode Laporan</label>
            <select 
              className="select"
              value={reportPeriod}
              onChange={(e) => setReportPeriod(e.target.value)}
            >
              <option value="month">Bulan Ini</option>
              <option value="semester">Semester Ini</option>
              <option value="year">Tahun Ajaran</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Laporan</label>
            <select 
              className="select"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="attendance">Kehadiran Siswa</option>
              <option value="teacher">Kehadiran Guru</option>
              <option value="late">Keterlambatan</option>
              <option value="permission">Izin & Sakit</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Total Siswa</p>
                <p className="text-2xl font-bold text-blue-700">1,245</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Rata-rata Kehadiran</p>
                <p className="text-2xl font-bold text-green-700">95.2%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-600 font-medium">Rata-rata Keterlambatan</p>
                <p className="text-2xl font-bold text-yellow-700">1.8%</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600 font-medium">Rata-rata Absen</p>
                <p className="text-2xl font-bold text-red-700">3.0%</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Tren Kehadiran 6 Bulan</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="kehadiran" stroke="#2196F3" strokeWidth={2} name="Kehadiran (%)" />
              <Line type="monotone" dataKey="target" stroke="#FF9800" strokeDasharray="5 5" name="Target (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Perbandingan Antar Kelas</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={classData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="class" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="kehadiran" fill="#4CAF50" name="Kehadiran (%)" />
              <Bar dataKey="keterlambatan" fill="#FF9800" name="Keterlambatan (%)" />
              <Bar dataKey="absen" fill="#F44336" name="Absen (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;