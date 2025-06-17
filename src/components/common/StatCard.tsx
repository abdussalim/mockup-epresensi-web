import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  type: 'primary' | 'success' | 'warning' | 'danger';
  trend?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, type, trend }) => {
  const colorMap = {
    primary: 'border-blue-500 bg-blue-50 text-blue-600',
    success: 'border-green-500 bg-green-50 text-green-600',
    warning: 'border-yellow-500 bg-yellow-50 text-yellow-600',
    danger: 'border-red-500 bg-red-50 text-red-600',
  };

  const bgColorMap = {
    primary: 'bg-blue-100',
    success: 'bg-green-100',
    warning: 'bg-yellow-100',
    danger: 'bg-red-100',
  };

  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${colorMap[type].split(' ')[0]} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-lg ${bgColorMap[type]} ${colorMap[type].split(' ')[2]} flex items-center justify-center text-2xl`}>
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
    </div>
  );
};

export default StatCard;