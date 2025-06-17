export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface Student {
  id: string;
  nis: string;
  name: string;
  class: string;
  email: string;
  status: 'active' | 'inactive';
  attendance?: AttendanceStatus;
}

export interface Teacher {
  id: string;
  nip: string;
  name: string;
  subject: string;
  email: string;
  status: 'active' | 'inactive';
}

export interface AttendanceRecord {
  id: string;
  studentName: string;
  class: string;
  time: string;
  status: AttendanceStatus;
  location: string;
  date: string;
}

export interface Permission {
  id: string;
  date: string;
  studentName: string;
  type: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface ActivityItem {
  id: string;
  avatar: string;
  name: string;
  action: string;
  time: string;
}

export interface Location {
  id: string;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  radius: number;
  status: 'active' | 'inactive';
}

export interface Schedule {
  id: string;
  day: string;
  shift: string;
  startTime: string;
  endTime: string;
  class: string;
  subject: string;
  teacher: string;
}

export interface Notification {
  id: string;
  type: 'attendance' | 'permission' | 'system';
  recipient: string;
  message: string;
  sentTime: string;
  status: 'sent' | 'pending' | 'failed';
}

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  ipAddress: string;
  status: 'success' | 'failed';
  details?: string;
}

export type AttendanceStatus = 'present' | 'late' | 'absent';

export type Section = 
  | 'dashboard' 
  | 'realtime' 
  | 'students' 
  | 'teachers' 
  | 'schedule' 
  | 'location' 
  | 'reports' 
  | 'notifications' 
  | 'permissions' 
  | 'import' 
  | 'settings' 
  | 'security';