import React, { useState } from 'react';
import { Plus, MapPin, Navigation, Edit, Trash2 } from 'lucide-react';
import StatusBadge from '@/components/common/StatusBadge';
import { Location } from '@/types';
import { mockLocations } from '@/utils/mockData';

const LocationManagement: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>(mockLocations);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lat: '',
    lng: '',
    radius: '50',
  });

  const handleAddLocation = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.lat && formData.lng) {
      const newLocation: Location = {
        id: Date.now().toString(),
        name: formData.name,
        coordinates: {
          lat: parseFloat(formData.lat),
          lng: parseFloat(formData.lng),
        },
        radius: parseInt(formData.radius),
        status: 'active',
      };
      setLocations([...locations, newLocation]);
      setShowAddForm(false);
      setFormData({ name: '', lat: '', lng: '', radius: '50' });
    }
  };

  const handleDeleteLocation = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus lokasi ini?')) {
      setLocations(locations.filter(location => location.id !== id));
    }
  };

  const toggleLocationStatus = (id: string) => {
    setLocations(locations.map(location =>
      location.id === id 
        ? { ...location, status: location.status === 'active' ? 'inactive' : 'active' }
        : location
    ));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Pengaturan Lokasi Absensi</h3>
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn btn-primary flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Tambah Lokasi
          </button>
        </div>

        {showAddForm && (
          <form onSubmit={handleAddLocation} className="p-6 border-b bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lokasi</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Contoh: Gerbang Utama"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
                <input
                  type="number"
                  step="any"
                  className="input"
                  placeholder="-6.200000"
                  value={formData.lat}
                  onChange={(e) => setFormData({...formData, lat: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                <input
                  type="number"
                  step="any"
                  className="input"
                  placeholder="106.816666"
                  value={formData.lng}
                  onChange={(e) => setFormData({...formData, lng: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Radius (meter)</label>
                <input
                  type="number"
                  className="input"
                  placeholder="50"
                  value={formData.radius}
                  onChange={(e) => setFormData({...formData, radius: e.target.value})}
                  required
                />
              </div>
            </div>
            
            <div className="mt-4 flex gap-2">
              <button type="submit" className="btn btn-primary">Simpan</button>
              <button 
                type="button" 
                onClick={() => setShowAddForm(false)} 
                className="btn btn-secondary"
              >
                Batal
              </button>
            </div>
          </form>
        )}

        <div className="p-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Peta Lokasi Sekolah
            </h4>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              [Google Maps / OpenStreetMap Integration]
            </div>
            <p className="text-sm text-blue-700 mt-2">
              Klik pada peta untuk mendapatkan koordinat lokasi
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nama Lokasi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Koordinat
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Radius
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
                {locations.map((location) => (
                  <tr key={location.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Navigation className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">{location.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {location.coordinates.lat.toFixed(6)}, {location.coordinates.lng.toFixed(6)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {location.radius} meter
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button onClick={() => toggleLocationStatus(location.id)}>
                        <StatusBadge status={location.status === 'active' ? 'Aktif' : 'Tidak Aktif'} />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteLocation(location.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationManagement;