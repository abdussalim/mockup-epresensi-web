import React, { useState } from 'react';
import { Plus, Calendar, Clock, Edit, Trash2 } from 'lucide-react';
import { Schedule } from '@/types';
import { mockSchedules } from '@/utils/mockData';
import { DAYS_OF_WEEK, TIME_SLOTS, CLASS_LIST, SUBJECT_LIST } from '@/utils/constants';

const ScheduleManagement: React.FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>(mockSchedules);
  const [selectedDay, setSelectedDay] = useState('Senin');
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    day: '',
    shift: 'Pagi',
    class: '',
    subject: '',
    teacher: '',
    timeSlot: '',
  });

  const filteredSchedules = schedules.filter(schedule => schedule.day === selectedDay);

  const handleAddSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    const timeSlot = TIME_SLOTS.find(slot => slot.id === formData.timeSlot);
    if (timeSlot && formData.class && formData.subject && formData.teacher) {
      const newSchedule: Schedule = {
        id: Date.now().toString(),
        day: formData.day || selectedDay,
        shift: formData.shift,
        startTime: timeSlot.start,
        endTime: timeSlot.end,
        class: formData.class,
        subject: formData.subject,
        teacher: formData.teacher,
      };
      setSchedules([...schedules, newSchedule]);
      setShowAddForm(false);
      setFormData({
        day: '',
        shift: 'Pagi',
        class: '',
        subject: '',
        teacher: '',
        timeSlot: '',
      });
    }
  };

  const handleDeleteSchedule = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus jadwal ini?')) {
      setSchedules(schedules.filter(schedule => schedule.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Manajemen Jadwal & Shift</h3>
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn btn-primary flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Buat Jadwal
          </button>
        </div>

        {showAddForm && (
          <form onSubmit={handleAddSchedule} className="p-6 border-b bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hari</label>
                <select 
                  className="select"
                  value={formData.day || selectedDay}
                  onChange={(e) => setFormData({...formData, day: e.target.value})}
                  required
                >
                  {DAYS_OF_WEEK.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Shift</label>
                <select 
                  className="select"
                  value={formData.shift}
                  onChange={(e) => setFormData({...formData, shift: e.target.value})}
                  required
                >
                  <option value="Pagi">Shift Pagi</option>
                  <option value="Siang">Shift Siang</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jam Pelajaran</label>
                <select 
                  className="select"
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                  required
                >
                  <option value="">Pilih Jam</option>
                  {TIME_SLOTS.map(slot => (
                    <option key={slot.id} value={slot.id}>
                      {slot.label} ({slot.start} - {slot.end})
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kelas</label>
                <select 
                  className="select"
                  value={formData.class}
                  onChange={(e) => setFormData({...formData, class: e.target.value})}
                  required
                >
                  <option value="">Pilih Kelas</option>
                  {CLASS_LIST.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mata Pelajaran</label>
                <select 
                  className="select"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                >
                  <option value="">Pilih Mata Pelajaran</option>
                  {SUBJECT_LIST.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Guru Pengajar</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Nama Guru"
                  value={formData.teacher}
                  onChange={(e) => setFormData({...formData, teacher: e.target.value})}
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
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {DAYS_OF_WEEK.map(day => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedDay === day 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Jadwal {selectedDay}
            </h4>
            
            {filteredSchedules.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                Belum ada jadwal untuk hari {selectedDay}
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredSchedules.map(schedule => (
                  <div 
                    key={schedule.id} 
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          {schedule.startTime} - {schedule.endTime}
                        </div>
                        <div className="font-semibold text-lg text-gray-800">
                          {schedule.subject}
                        </div>
                        <div className="text-sm space-y-1">
                          <div className="text-gray-600">
                            Kelas: <span className="font-medium text-gray-800">{schedule.class}</span>
                          </div>
                          <div className="text-gray-600">
                            Guru: <span className="font-medium text-gray-800">{schedule.teacher}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteSchedule(schedule.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleManagement;