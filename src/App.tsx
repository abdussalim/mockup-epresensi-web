import React, { useState } from 'react';
import Layout from './components/layout/Layouts';
import Dashboard from './components/sections/Dashboard';
import RealtimeAttendance from './components/sections/RealtimeAttendance';
import StudentManagement from './components/sections/StudentManagement';
import TeacherManagement from './components/sections/TeacherManagement';
import ScheduleManagement from './components/sections/ScheduleManagement';
import LocationManagement from './components/sections/LocationManagement';
import Reports from './components/sections/Reports';
import Notifications from './components/sections/Notifications';
import Permissions from './components/sections/Permissions';
import ImportData from './components/sections/ImportData';
import Settings from './components/sections/Settings';
import Security from './components/sections/Security';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'realtime':
        return <RealtimeAttendance />;
      case 'students':
        return <StudentManagement />;
      case 'teachers':
        return <TeacherManagement />;
      case 'schedule':
        return <ScheduleManagement />;
      case 'location':
        return <LocationManagement />;
      case 'reports':
        return <Reports />;
      case 'notifications':
        return <Notifications />;
      case 'permissions':
        return <Permissions />;
      case 'import':
        return <ImportData />;
      case 'settings':
        return <Settings />;
      case 'security':
        return <Security />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeSection={activeSection} onSectionChange={setActiveSection}>
      {renderContent()}
    </Layout>
  );
};

export default App;