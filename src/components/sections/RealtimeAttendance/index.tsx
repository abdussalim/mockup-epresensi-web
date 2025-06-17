import React, { useState, useEffect } from 'react';
import { Search, RefreshCw } from 'lucide-react';
import StatusBadge from '../../common/StatusBadge';
import { AttendanceRecord } from '../../../types';
import { mockAttendanceRecords } from '../../../utils/mockData';

const RealtimeAttendance: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>(mockAttendanceRecords);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredRecords = attendanceRecords.filter(record =>
    record.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.class.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setAttendanceRecords([...mockAttendanceRecords]);
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      // Add random attendance record simulation here if needed
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Monitoring Kehadiran Real-time</h3>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari siswa..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button 
            onClick={handleRefresh}
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 ${isRefreshing ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isRefreshing}
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Siswa</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelas</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lokasi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRecords.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.studentName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.class}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge 
                    status={record.status === 'present' ? 'Hadir' : record.status === 'late' ? 'Terlambat' : 'Tidak Hadir'} 
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RealtimeAttendance;