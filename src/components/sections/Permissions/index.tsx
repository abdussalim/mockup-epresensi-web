import React, { useState } from 'react';
import { CheckCircle, XCircle, FileText } from 'lucide-react';
import StatusBadge from '../../common/StatusBadge';
import { Permission } from '../../../types';
import { mockPermissions } from '../../../utils/mockData';

const PermissionsManagement: React.FC = () => {
  const [permissions, setPermissions] = useState<Permission[]>(mockPermissions);

  const handleApprove = (id: string) => {
    setPermissions(permissions.map(permission =>
      permission.id === id ? { ...permission, status: 'approved' } : permission
    ));
  };

  const handleReject = (id: string) => {
    setPermissions(permissions.map(permission =>
      permission.id === id ? { ...permission, status: 'rejected' } : permission
    ));
  };

  const pendingCount = permissions.filter(p => p.status === 'pending').length;

  return (
    <div className="space-y-6">
      {pendingCount > 0 && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FileText className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Ada <span className="font-semibold">{pendingCount} permohonan izin</span> yang menunggu persetujuan.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Manajemen Izin & Verifikasi</h3>
          <button className="btn btn-primary">
            Proses Semua
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Siswa</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Izin</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keterangan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {permissions.map((permission) => (
                <tr key={permission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{permission.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{permission.studentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{permission.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{permission.reason}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge 
                      status={permission.status === 'pending' ? 'Menunggu' : permission.status === 'approved' ? 'Disetujui' : 'Ditolak'} 
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {permission.status === 'pending' ? (
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleApprove(permission.id)}
                          className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Setujui
                        </button>
                        <button 
                          onClick={() => handleReject(permission.id)}
                          className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          <XCircle className="w-4 h-4" />
                          Tolak
                        </button>
                      </div>
                    ) : (
                      <button className="btn btn-primary btn-sm">
                        Detail
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PermissionsManagement;