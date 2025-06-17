import React from 'react';

interface StatusBadgeProps {
  status: string;
  type?: 'success' | 'warning' | 'danger';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, type }) => {
  const colorMap = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };
  
  const statusColorMap: Record<string, string> = {
    present: colorMap.success,
    hadir: colorMap.success,
    active: colorMap.success,
    aktif: colorMap.success,
    approved: colorMap.success,
    disetujui: colorMap.success,
    late: colorMap.warning,
    terlambat: colorMap.warning,
    pending: colorMap.warning,
    menunggu: colorMap.warning,
    absent: colorMap.danger,
    'tidak hadir': colorMap.danger,
    inactive: colorMap.danger,
    'tidak aktif': colorMap.danger,
    rejected: colorMap.danger,
    ditolak: colorMap.danger,
  };

  const getColorClass = () => {
    if (type) return colorMap[type];
    return statusColorMap[status.toLowerCase()] || colorMap.success;
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClass()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;