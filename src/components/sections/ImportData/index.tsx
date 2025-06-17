import React, { useState } from 'react';
import { Upload, Download, FileSpreadsheet, CheckCircle, AlertCircle } from 'lucide-react';
import StatusBadge from '@/components/common/StatusBadge';

interface ImportHistory {
  id: string;
  date: string;
  filename: string;
  type: string;
  status: 'success' | 'failed' | 'processing';
  records: number;
}

const ImportData: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [importType, setImportType] = useState('students');
  const [isProcessing, setIsProcessing] = useState(false);
  const [importHistory, setImportHistory] = useState<ImportHistory[]>([
    {
      id: '1',
      date: '16/06/2025',
      filename: 'siswa_baru_2025.xlsx',
      type: 'Data Siswa',
      status: 'success',
      records: 125,
    },
    {
      id: '2',
      date: '15/06/2025',
      filename: 'jadwal_semester_ganjil.csv',
      type: 'Data Jadwal',
      status: 'success',
      records: 450,
    },
  ]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleImport = () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    
    // Simulate import process
    setTimeout(() => {
      const newImport: ImportHistory = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('id-ID'),
        filename: selectedFile.name,
        type: importType === 'students' ? 'Data Siswa' : 
              importType === 'teachers' ? 'Data Guru' : 
              importType === 'schedule' ? 'Data Jadwal' : 'Data Kehadiran',
        status: 'success',
        records: Math.floor(Math.random() * 200) + 50,
      };
      
      setImportHistory([newImport, ...importHistory]);
      setIsProcessing(false);
      setSelectedFile(null);
    }, 3000);
  };

  const downloadTemplate = () => {
    // Simulate template download
    alert(`Downloading template for ${importType}...`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Import Data</h3>
          <button 
            onClick={downloadTemplate}
            className="btn btn-primary flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Template
          </button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Data</label>
              <select 
                className="select mb-4"
                value={importType}
                onChange={(e) => setImportType(e.target.value)}
              >
                <option value="students">Data Siswa</option>
                <option value="teachers">Data Guru</option>
                <option value="schedule">Data Jadwal</option>
                <option value="attendance">Data Kehadiran</option>
              </select>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <FileSpreadsheet className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-700 mb-2">
                  Upload File Excel atau CSV
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Drag & drop file atau klik untuk browse
                </p>
                <input
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="btn btn-primary cursor-pointer inline-block"
                >
                  Pilih File
                </label>
                
                {selectedFile && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700 font-medium">
                      {selectedFile.name}
                    </p>
                    <p className="text-xs text-blue-600">
                      {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                )}
              </div>

              {selectedFile && (
                <button 
                  onClick={handleImport}
                  disabled={isProcessing}
                  className={`w-full mt-4 btn btn-success flex items-center justify-center gap-2 ${
                    isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4" />
                      Import Data
                    </>
                  )}
                </button>
              )}
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-4">Panduan Import</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Format File</p>
                    <p className="text-sm text-gray-500">
                      Gunakan format Excel (.xlsx) atau CSV (.csv)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Header Kolom</p>
                    <p className="text-sm text-gray-500">
                      Pastikan header sesuai dengan template
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Data Validation</p>
                    <p className="text-sm text-gray-500">
                      Sistem akan memvalidasi data sebelum import
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Backup Data</p>
                    <p className="text-sm text-gray-500">
                      Selalu backup data sebelum import data baru
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-gray-800 mb-4">Riwayat Import</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      File
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Records
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {importHistory.map((history) => (
                    <tr key={history.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {history.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {history.filename}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {history.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge 
                          status={
                            history.status === 'success' ? 'Berhasil' : 
                            history.status === 'processing' ? 'Processing' : 
                            'Gagal'
                          } 
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {history.records} records
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

export default ImportData;