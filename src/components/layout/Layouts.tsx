import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Section } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeSection, onSectionChange }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar 
        isOpen={sidebarOpen} 
        activeSection={activeSection}
        onSectionChange={onSectionChange}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <main className="flex-1 overflow-y-auto">
        <Header 
          activeSection={activeSection}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;