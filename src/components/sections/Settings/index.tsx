import React, { useState } from 'react';
import { Settings as SettingsIcon, Clock, School, Save } from 'lucide-react';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    schoolName: 'SMA Negeri 1 Jakarta',
    address: 'Jl. Pendidikan No. 123, Jakarta Pusat',
    academicYear: '2024/2025',
    entryTime: '07:30',
    exitTime: '15:30',
    latenessTolerance: '10',
    autoBackup: true,
    notificationEmail: 'admin@school.com',
    smsGateway: true,
  });

  const handleSave = () => {
    // Save settings logic
    alert('Pengaturan berhasil disimpan!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Pengaturan Sistem</h3>
          <button onClick={handleSave} className="btn btn-primary flex items-center gap-2">
            <Save className="w-4 h-4" />
            Simpan Perubahan
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <School className="w-5 h-5" />
                Pengaturan Umum
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Sekolah</label>
                  <input
                    type="text"
                    className="input"
                    value={settings.schoolName}
                    onChange={(e) => setSettings({...settings, schoolName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Alamat</label>
                  <textarea
                    className="input"
                    rows={3}
                    value={settings.address}
                    onChange={(e) => setSettings({...settings, address: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tahun Ajaran</label>
                  <select 
                    className="select"
                    value={settings.academicYear}
                    onChange={(e) => setSettings({...settings, academicYear: e.target.value})}
                  >
                    <option value="2024/2025">2024/2025</option>
                    <option value="2025/2026">2025/2026</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Pengaturan Waktu
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jam Masuk</label>
                  <input
                    type="time"
                    className="input"
                    value={settings.entryTime}
                    onChange={(e) => setSettings({...settings, entryTime: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jam Pulang</label>
                  <input
                    type="time"
                    className="input"
                    value={settings.exitTime}
                    onChange={(e) => setSettings({...settings, exitTime: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Toleransi Keterlambatan</label>
                  <select 
                    className="select"
                    value={settings.latenessTolerance}
                    onChange={(e) => setSettings({...settings, latenessTolerance: e.target.value})}
                  >
                    <option value="5">5 menit</option>
                    <option value="10">10 menit</option>
                    <option value="15">15 menit</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <SettingsIcon className="w-5 h-5" />
              Pengaturan Notifikasi
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-700">Auto Backup Database</p>
                  <p className="text-sm text-gray-500">Backup otomatis setiap hari pukul 23:00</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={settings.autoBackup}
                    onChange={(e) => setSettings({...settings, autoBackup: e.target.checked})}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-700">SMS Gateway</p>
                  <p className="text-sm text-gray-500">Kirim notifikasi melalui SMS</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={settings.smsGateway}
                    onChange={(e) => setSettings({...settings, smsGateway: e.target.checked})}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;