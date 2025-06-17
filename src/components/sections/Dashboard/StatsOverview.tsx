import React from 'react';
import StatCard from '../../common/StatCard';

const StatsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard title="Total Siswa" value={1245} icon="👥" type="primary" trend={2.5} />
      <StatCard title="Hadir Hari Ini" value={1156} icon="✅" type="success" trend={5} />
      <StatCard title="Terlambat" value={23} icon="⏰" type="warning" trend={-10} />
      <StatCard title="Tidak Hadir" value={66} icon="❌" type="danger" trend={-3} />
    </div>
  );
};

export default StatsOverview;