import React, { useState } from 'react';
import { Plus, Bell, Send, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import StatusBadge from '@/components/common/StatusBadge';
import { Notification } from '@/types';
import { mockNotifications } from '@/utils/mockData';
import { NOTIFICATION_TYPE } from '@/utils/constants';

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    type: 'ATTENDANCE' as keyof typeof NOTIFICATION_TYPE,
    recipient: '',
    message: '',
  });

  const handleSendNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.recipient && formData.message) {
      const newNotification: Notification = {
        id: Date.now().toString(),
        type: formData?.type,
        recipient: formData.recipient,
        message: formData.message,
        sentTime: new Date().toLocaleTimeString('id-ID'),
        status: 'pending',
      };
      setNotifications([newNotification, ...notifications]);
      setShowCreateForm(false);
      setFormData({ type: 'ATTENDANCE', recipient: '', message: '' });
      
      // Simulate sending notification
      setTimeout(() => {
        setNotifications(prev => prev.map(notif =>
          notif.id === newNotification.id 
            ? { ...notif, status: 'sent' }
            : notif
        ));
      }, 2000);
    }
  };

  const resendNotification = (id: string) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, status: 'pending' } : notif
    ));
    
    // Simulate resending
    setTimeout(() => {
      setNotifications(prev => prev.map(notif =>
        notif.id === id ? { ...notif, status: 'sent' } : notif
      ));
    }, 2000);
  };

  const pendingCount = notifications.filter(n => n.status === 'pending').length;
  const failedCount = notifications.filter(n => n.status === 'failed').length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 font-medium">Terkirim</p>
              <p className="text-2xl font-bold text-green-700">
                {notifications.filter(n => n.status === 'sent').length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-600 font-medium">Pending</p>
              <p className="text-2xl font-bold text-yellow-700">{pendingCount}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 font-medium">Gagal</p>
              <p className="text-2xl font-bold text-red-700">{failedCount}</p>
            </div>
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {(pendingCount > 0 || failedCount > 0) && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-yellow-400 mr-3" />
            <p className="text-sm text-yellow-700">
              Ada <span className="font-semibold">{pendingCount + failedCount} notifikasi</span> yang perlu perhatian Anda.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Pengaturan Notifikasi & Alert</h3>
          <button 
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="btn btn-primary flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Buat Notifikasi
          </button>
        </div>

        {showCreateForm && (
          <form onSubmit={handleSendNotification} className="p-6 border-b bg-gray-50">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Notifikasi</label>
                <select 
                  className="select"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value as keyof typeof NOTIFICATION_TYPE})}
                >
                  <option value="attendance">Kehadiran</option>
                  <option value="permission">Izin</option>
                  <option value="system">Sistem</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Penerima</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Contoh: Orang Tua Ahmad Fauzi"
                  value={formData.recipient}
                  onChange={(e) => setFormData({...formData, recipient: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                <textarea
                  className="input"
                  rows={3}
                  placeholder="Tulis pesan notifikasi..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
            </div>
            
            <div className="mt-4 flex gap-2">
              <button type="submit" className="btn btn-primary flex items-center gap-2">
                <Send className="w-4 h-4" />
                Kirim
              </button>
              <button 
                type="button" 
                onClick={() => setShowCreateForm(false)} 
                className="btn btn-secondary"
              >
                Batal
              </button>
            </div>
          </form>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jenis
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Penerima
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pesan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Waktu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {notifications.map((notification) => (
                <tr key={notification.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Bell className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm capitalize">{notification.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {notification.recipient}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                    {notification.message}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {notification.sentTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge 
                      status={
                        notification.status === 'sent' ? 'Terkirim' : 
                        notification.status === 'pending' ? 'Pending' : 
                        'Gagal'
                      } 
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {notification.status === 'pending' ? (
                      <span className="text-gray-400">Mengirim...</span>
                    ) : notification.status === 'failed' ? (
                      <button 
                        onClick={() => resendNotification(notification.id)}
                        className="text-orange-600 hover:text-orange-900"
                      >
                        Kirim Ulang
                      </button>
                    ) : (
                      <button className="text-blue-600 hover:text-blue-900">
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

export default Notifications;