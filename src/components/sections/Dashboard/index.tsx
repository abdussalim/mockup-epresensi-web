import React from 'react';
import StatsOverview from './StatsOverview';
import AttendanceChart from './AttendanceChart';
import ActivityFeed from './ActivityFeed';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Dashboard: React.FC = () => {
  const pieData = [
    { name: 'Hadir', value: 1156, color: '#4CAF50' },
    { name: 'Terlambat', value: 23, color: '#FF9800' },
    { name: 'Tidak Hadir', value: 66, color: '#F44336' },
  ];

  return (
    <div>
      <StatsOverview />
      
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <AttendanceChart />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Distribusi Kehadiran</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <ActivityFeed />
    </div>
  );
};

export default Dashboard;