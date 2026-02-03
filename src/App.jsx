import styles from './App.module.css';
import { useState } from 'react';
import PageEditorBar from './components/organisms/PageEditorBar.jsx';
import Header from './components/organisms/Header.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import FeaturesSection from './components/sections/FeaturesSection.jsx';
import HowItWorksSection from './components/sections/HowItWorksSection.jsx';
import ResultsSection from './components/sections/ResultsSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import SignupSection from './components/sections/SignupSection.jsx';
import TabPlaceholderSection from './components/sections/TabPlaceholderSection.jsx';
import EmployerDashboardSection from './components/sections/EmployerDashboardSection.jsx';

const TAB_PLACEHOLDERS = {
  'Admin Dashboard': {
    title: 'Admin Dashboard',
    description:
      'Review platform metrics, approve workflows, and keep every team aligned from a single control center.',
  },
  'Employee Dashboard': {
    title: 'Employee Dashboard',
    description:
      'Stay on top of interview assignments, feedback requests, and progress tracking in one workspace.',
  },
  'Admin Schedule': {
    title: 'Admin Schedule',
    description:
      'Coordinate shared calendars, audits, and approval windows to keep every department in sync.',
  },
  'Employer Schedule': {
    title: 'Employer Schedule',
    description:
      'View upcoming interviews, coordinate hiring team availability, and manage recruiting milestones.',
  },
  'Employee Schedule': {
    title: 'Employee Schedule',
    description:
      'See your interview agenda, reminders, and prep windows so nothing slips through the cracks.',
  },
};

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const isEmployerDashboard = activeTab === 'Employer Dashboard';

  return (
    <div className={styles.app}>
      <PageEditorBar activeTab={activeTab} onTabChange={setActiveTab} />
      {!isEmployerDashboard && <Header />}
      <main className={isEmployerDashboard ? styles.dashboardMain : undefined}>
        {activeTab === 'Home' && (
          <>
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <ResultsSection />
            <AboutSection />
          </>
        )}
        {activeTab === 'Signup' && <SignupSection onBack={() => setActiveTab('Home')} />}
        {isEmployerDashboard && <EmployerDashboardSection />}
        {TAB_PLACEHOLDERS[activeTab] && (
          <TabPlaceholderSection
            title={TAB_PLACEHOLDERS[activeTab].title}
            description={TAB_PLACEHOLDERS[activeTab].description}
            onBack={() => setActiveTab('Home')}
          />
        )}
      </main>
    </div>
  );
};

export default App;
