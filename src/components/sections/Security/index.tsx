import React, { useState } from 'react';
import { Shield, Download, RefreshCw, CheckCircle, AlertTriangle, Activity } from 'lucide-react';
import StatusBadge from '@/components/common/StatusBadge';
import { AuditLog } from '@/types';
import { mockAuditLogs } from '@/utils/mockData';

const Security: React.FC = () => {
  const [auditLogs] = useState<AuditLog[]>(mockAuditLogs);
  const [isBackupRunning, setIsBackupRunning] = useState(false);
  const [lastBackupTime] = useState('17/06/2025 03:00:00');
  const [lastScanTime] = useState('2 jam lalu');

  const handleBackup = () => {
    setIsBackupRunning(true);
    setTimeout(() => {
      setIsBackupRunning(false);
      alert('Backup berhasil dibuat!');
    }, 3000);
  };

  const handleExportLog = () => {
    alert('Exporting audit logs...');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Keamanan & Audit</h3>
          <button 
            onClick={handleExportLog}
            className="btn btn-primary flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export Log
          </button>
        </div>

        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Status Keamanan Sistem
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Sistem Status</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-2xl font-bold text-green-600">Aman</p>
                <p className="text-xs text-gray-500 mt-1">Last scan: {lastScanTime}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Auto Backup</span>
                  <RefreshCw className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-2xl font-bold text-blue-600">Aktif</p>
                <p className="text-xs text-gray-500 mt-1">Next: 23:00 WIB</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Active Sessions</span>
                  <Activity className="w-5 h-5 text-orange-500" />
                </div>
                <p className="text-2xl font-bold text-orange-600">12</p>
                <p className="text-xs text-gray-500 mt-1">Users online</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">Manual Backup</p>
                    <p className="text-sm text-gray-600">Last backup: {lastBackupTime}</p>
                  </div>
                </div>
                <button 
                  onClick={handleBackup}
                  disabled={isBackupRunning}
                  className={`btn btn-primary btn-sm ${isBackupRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isBackupRunning ? 'Running...' : 'Backup Now'}
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="font-medium text-gray-800">Security Updates</p>
                    <p className="text-sm text-gray-600">All systems up to date</p>
                  </div>
                </div>
                <button className="btn btn-secondary btn-sm">
                  Check Updates
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Audit Log</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Waktu
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aktivitas
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      IP Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.user}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.ipAddress}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge 
                          status={log.status === 'success' ? 'Berhasil' : 'Gagal'} 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;