import styles from './App.module.css';
import PageEditorBar from './components/organisms/PageEditorBar.jsx';
import Header from './components/organisms/Header.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import FeaturesSection from './components/sections/FeaturesSection.jsx';
import HowItWorksSection from './components/sections/HowItWorksSection.jsx';
import ResultsSection from './components/sections/ResultsSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import SignupSection from './components/sections/SignupSection.jsx';

const App = () => {
  return (
    <div className={styles.app}>
      <PageEditorBar />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ResultsSection />
        <AboutSection />
        <SignupSection />
      </main>
    </div>
  );
};

export default App;
