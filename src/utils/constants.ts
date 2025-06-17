export const ATTENDANCE_STATUS = {
  PRESENT: 'present',
  LATE: 'late',
  ABSENT: 'absent',
} as const;

export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const;

export const PERMISSION_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
} as const;

export const NOTIFICATION_TYPE = {
  ATTENDANCE: 'attendance',
  PERMISSION: 'permission',
  SYSTEM: 'system',
} as const;

export const DAYS_OF_WEEK = [
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jumat',
  'Sabtu',
] as const;

export const CLASS_LIST = [
  'X MIPA 1', 'X MIPA 2', 'X MIPA 3',
  'X IPS 1', 'X IPS 2', 'X IPS 3',
  'XI MIPA 1', 'XI MIPA 2', 'XI MIPA 3',
  'XI IPS 1', 'XI IPS 2', 'XI IPS 3',
  'XII MIPA 1', 'XII MIPA 2', 'XII MIPA 3',
  'XII IPS 1', 'XII IPS 2', 'XII IPS 3',
] as const;

export const SUBJECT_LIST = [
  'Matematika',
  'Fisika',
  'Kimia',
  'Biologi',
  'Bahasa Indonesia',
  'Bahasa Inggris',
  'Sejarah',
  'Geografi',
  'Ekonomi',
  'Sosiologi',
  'Pendidikan Agama',
  'Pendidikan Kewarganegaraan',
  'Seni Budaya',
  'Pendidikan Jasmani',
  'Teknologi Informasi',
] as const;

export const PERMISSION_TYPES = [
  'Sakit',
  'Keperluan Keluarga',
  'Kegiatan Sekolah',
  'Lainnya',
] as const;

export const TIME_SLOTS = [
  { id: '1', label: 'Jam 1-2', start: '07:30', end: '09:00' },
  { id: '2', label: 'Jam 3-4', start: '09:15', end: '10:45' },
  { id: '3', label: 'Jam 5-6', start: '11:00', end: '12:30' },
  { id: '4', label: 'Jam 7-8', start: '13:00', end: '14:30' },
  { id: '5', label: 'Jam 9-10', start: '14:45', end: '16:15' },
] as const;

export const SHIFTS = [
  { id: 'pagi', label: 'Shift Pagi', start: '07:00', end: '12:00' },
  { id: 'siang', label: 'Shift Siang', start: '12:30', end: '17:30' },
] as const;

export const NOTIFICATION_STATUS = {
  SENT: 'sent',
  PENDING: 'pending',
  FAILED: 'failed',
} as const;

export const AUDIT_ACTIONS = [
  'Login',
  'Logout',
  'Create',
  'Update',
  'Delete',
  'Export',
  'Import',
  'View',
] as const;