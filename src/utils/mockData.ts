import { Student, Teacher, AttendanceRecord, Permission, Location, Schedule, Notification, AuditLog } from '../types';

export const mockStudents: Student[] = [
  { id: '1', nis: '2025001', name: 'Ahmad Fauzi', class: 'XII IPA 1', email: 'ahmad.fauzi@school.com', status: 'active' },
  { id: '2', nis: '2025002', name: 'Siti Nurhaliza', class: 'XI IPS 2', email: 'siti.n@school.com', status: 'active' },
  { id: '3', nis: '2025003', name: 'Budi Santoso', class: 'X MIPA 3', email: 'budi.s@school.com', status: 'active' },
  { id: '4', nis: '2025004', name: 'Maria Angela', class: 'XII IPA 2', email: 'maria.a@school.com', status: 'active' },
  { id: '5', nis: '2025005', name: 'Robert Parker', class: 'XI MIPA 1', email: 'robert.p@school.com', status: 'active' },
];

export const mockTeachers: Teacher[] = [
  { id: '1', nip: '196801012005011001', name: 'Dr. Siti Rahayu, M.Pd', subject: 'Matematika', email: 'siti.rahayu@school.com', status: 'active' },
  { id: '2', nip: '197502152006042002', name: 'Drs. Ahmad Syarif', subject: 'Fisika', email: 'ahmad.syarif@school.com', status: 'active' },
  { id: '3', nip: '198003202008011003', name: 'Sri Wahyuni, S.Pd', subject: 'Bahasa Indonesia', email: 'sri.wahyuni@school.com', status: 'active' },
];

export const mockAttendanceRecords: AttendanceRecord[] = [
  { id: '1', studentName: 'Ahmad Fauzi', class: 'XII IPA 1', time: '07:15:23', status: 'present', location: 'Gerbang Utama', date: '2025-06-17' },
  { id: '2', studentName: 'Siti Nurhaliza', class: 'XI IPS 2', time: '07:18:45', status: 'late', location: 'Gerbang Utama', date: '2025-06-17' },
  { id: '3', studentName: 'Budi Santoso', class: 'X MIPA 3', time: '-', status: 'absent', location: '-', date: '2025-06-17' },
];

export const mockPermissions: Permission[] = [
  { id: '1', date: '17/06/2025', studentName: 'Maria Angela', type: 'Sakit', reason: 'Demam tinggi, surat dokter tersedia', status: 'pending' },
  { id: '2', date: '16/06/2025', studentName: 'Robert Parker', type: 'Keperluan Keluarga', reason: 'Menghadiri acara keluarga', status: 'approved' },
];

export const mockLocations: Location[] = [
  { id: '1', name: 'Gerbang Utama', coordinates: { lat: -6.200000, lng: 106.816666 }, radius: 50, status: 'active' },
  { id: '2', name: 'Gedung A', coordinates: { lat: -6.200100, lng: 106.816766 }, radius: 30, status: 'active' },
  { id: '3', name: 'Gedung B', coordinates: { lat: -6.200200, lng: 106.816866 }, radius: 30, status: 'active' },
];

export const mockSchedules: Schedule[] = [
  { id: '1', day: 'Senin', shift: 'Pagi', startTime: '07:30', endTime: '09:00', class: 'XII IPA 1', subject: 'Matematika', teacher: 'Dr. Siti Rahayu, M.Pd' },
  { id: '2', day: 'Senin', shift: 'Pagi', startTime: '09:15', endTime: '10:45', class: 'XII IPA 2', subject: 'Fisika', teacher: 'Drs. Ahmad Syarif' },
];

export const mockNotifications: Notification[] = [
  { id: '1', type: 'attendance', recipient: 'Orang Tua Ahmad Fauzi', message: 'Putra/i Anda terlambat hari ini', sentTime: '07:35', status: 'sent' },
  { id: '2', type: 'permission', recipient: 'Wali Kelas XII IPA 1', message: 'Ada siswa mengajukan izin sakit', sentTime: '08:00', status: 'pending' },
];

export const mockAuditLogs: AuditLog[] = [
  { id: '1', timestamp: '2025-06-17 09:15:00', user: 'admin@school.com', action: 'Login sistem', ipAddress: '192.168.1.100', status: 'success' },
  { id: '2', timestamp: '2025-06-17 08:45:00', user: 'guru1@school.com', action: 'Export data siswa', ipAddress: '192.168.1.105', status: 'success' },
];