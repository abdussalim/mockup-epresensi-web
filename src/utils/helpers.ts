export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

export const formatTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

export const getStatusColor = (status: string): string => {
  const statusMap: Record<string, string> = {
    present: 'success',
    late: 'warning',
    absent: 'danger',
    active: 'success',
    inactive: 'danger',
    pending: 'warning',
    approved: 'success',
    rejected: 'danger',
  };
  
  return statusMap[status.toLowerCase()] || 'default';
};

export const calculateAttendancePercentage = (present: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((present / total) * 100);
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};