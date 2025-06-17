import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { Section } from '../../types';

interface HeaderProps {
  activeSection: Section;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onMenuClick }) => {
  const sectionTitles: Record<Section, string> = {
    dashboard: 'Dashboard',
    realtime: 'Absensi Real-time',
    students: 'Manajemen Siswa',
    teachers: 'Manajemen Guru',
    schedule: 'Jadwal & Shift',
    location: 'Lokasi Absensi',
    reports: 'Laporan & Analytics',
    notifications: 'Notifikasi & Alert',
    permissions: 'Izin & Verifikasi',
    import: 'Import Data',
    settings: 'Pengaturan',
    security: 'Keamanan & Audit',
  };

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 hover:bg-gray-100 p-2 rounded"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-semibold text-gray-800">{sectionTitles[activeSection]}</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative text-gray-600 hover:text-gray-800">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
            AD
          </div>
          <div className="hidden md:block">
            <div className="font-semibold text-gray-800">Admin</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;