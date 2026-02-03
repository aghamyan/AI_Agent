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
import AdminDashboardSection from './components/sections/AdminDashboardSection.jsx';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className={styles.app}>
      <PageEditorBar activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'Home' && <Header />}
      <main>
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
        {activeTab === 'Admin Dashboard' && <AdminDashboardSection />}
      </main>
    </div>
  );
};

export default App;
