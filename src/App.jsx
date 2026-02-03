import styles from './App.module.css';
import Header from './components/organisms/Header.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import FeaturesSection from './components/sections/FeaturesSection.jsx';
import HowItWorksSection from './components/sections/HowItWorksSection.jsx';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
    </div>
  );
};

export default App;
