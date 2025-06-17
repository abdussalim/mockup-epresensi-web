import React from 'react';
import { ActivityItem } from '../../../types';

const ActivityFeed: React.FC = () => {
  const recentActivity: ActivityItem[] = [
    { id: '1', avatar: 'JS', name: 'John Smith', action: 'Melakukan absen masuk', time: '2 menit lalu' },
    { id: '2', avatar: 'MA', name: 'Maria Angela', action: 'Mengajukan izin sakit', time: '5 menit lalu' },
    { id: '3', avatar: 'RP', name: 'Robert Parker', action: 'Terlambat masuk kelas', time: '15 menit lalu' },
    { id: '4', avatar: 'SN', name: 'Sarah Nicole', action: 'Absen pulang', time: '30 menit lalu' },
    { id: '5', avatar: 'JD', name: 'James Dean', action: 'Mengajukan izin keperluan keluarga', time: '1 jam lalu' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h3 className="text-lg font-semibold text-gray-800">Aktivitas Terbaru</h3>
      </div>
      <div className="divide-y">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="px-6 py-4 flex items-center hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold mr-4">
              {activity.avatar}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{activity.name}</div>
              <div className="text-sm text-gray-600">{activity.action}</div>
            </div>
            <div className="text-sm text-gray-500">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;