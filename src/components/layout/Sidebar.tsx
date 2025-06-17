import React from 'react';
import { 
  Home, CheckCircle, Users, GraduationCap, Clock, MapPin, 
  FileText, Bell, Shield, FileUp, Settings, X 
} from 'lucide-react';
import { NavItem, Section } from '../../types';

interface SidebarProps {
  isOpen: boolean;
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeSection, onSectionChange, onToggle }) => {
  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { id: 'realtime', label: 'Absensi Real-time', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'students', label: 'Manajemen Siswa', icon: <Users className="w-5 h-5" /> },
    { id: 'teachers', label: 'Manajemen Guru', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'schedule', label: 'Jadwal & Shift', icon: <Clock className="w-5 h-5" /> },
    { id: 'location', label: 'Lokasi Absensi', icon: <MapPin className="w-5 h-5" /> },
    { id: 'reports', label: 'Laporan & Analytics', icon: <FileText className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifikasi & Alert', icon: <Bell className="w-5 h-5" /> },
    { id: 'permissions', label: 'Izin & Verifikasi', icon: <FileText className="w-5 h-5" /> },
    { id: 'import', label: 'Import Data', icon: <FileUp className="w-5 h-5" /> },
    { id: 'settings', label: 'Pengaturan', icon: <Settings className="w-5 h-5" /> },
    { id: 'security', label: 'Keamanan & Audit', icon: <Shield className="w-5 h-5" /> },
  ];

  return (
    <aside className={`${isOpen ? 'w-72' : 'w-0'} transition-all duration-300 bg-gradient-to-b from-blue-600 to-blue-800 text-white h-full overflow-hidden fixed lg:relative z-20`}>
      <div className="p-6 border-b border-blue-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl">
            📊
          </div>
          <h1 className="text-xl font-bold">EDUNUSA Presensi</h1>
        </div>
        <button 
          onClick={onToggle}
          className="lg:hidden text-white hover:bg-white/10 p-2 rounded"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <nav className="py-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onSectionChange(item.id as Section);
              if (window.innerWidth < 1024) onToggle();
            }}
            className={`w-full flex items-center gap-3 px-6 py-3 hover:bg-white/10 transition-colors border-l-4 ${
              activeSection === item.id 
                ? 'bg-white/15 border-yellow-400' 
                : 'border-transparent hover:border-white/50'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;