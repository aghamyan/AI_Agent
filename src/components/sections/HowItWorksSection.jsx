import Container from '../atoms/Container.jsx';
import StepCard from '../molecules/StepCard.jsx';
import styles from './HowItWorksSection.module.css';

const STEPS = [
  {
    step: '01',
    tone: 'blue',
    title: 'Upload Job Requirements',
    description:
      'Define your position requirements, company culture, and desired qualifications. Our AI analyzes and optimizes your job posting.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M8.5 10.5L12 7l3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <rect x="4" y="16" width="16" height="4" rx="2" stroke="currentColor" stroke-width="1.5"/>
      </svg>
    ),
  },
  {
    step: '02',
    tone: 'purple',
    title: 'AI Candidate Matching',
    description:
      'Our intelligent algorithms screen thousands of candidates, eliminating bias while identifying the best matches based on skills and potential.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.686 2 6 4.686 6 8v1.5C6 10.88 4.88 12 3.5 12v2c1.38 0 2.5 1.12 2.5 2.5V18c0 3.314 2.686 6 6 6s6-2.686 6-6v-1.5c0-1.38 1.12-2.5 2.5-2.5v-2c-1.38 0-2.5-1.12-2.5-2.5V8c0-3.314-2.686-6-6-6z" stroke="currentColor" stroke-width="1.5"/>
        <path d="M9 9h6M9 13h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    ),
  },
  {
    step: '03',
    tone: 'green',
    title: 'Review Diverse Shortlist',
    description:
      'Receive a curated list of qualified candidates from diverse backgrounds, ranked by compatibility and potential for success.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7a3 3 0 106 0 3 3 0 00-6 0z" stroke="currentColor" stroke-width="1.5"/>
        <path d="M3 19v-1a4 4 0 014-4h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M15 10a3 3 0 106 0 3 3 0 00-6 0z" stroke="currentColor" stroke-width="1.5"/>
        <path d="M13 19v-1a4 4 0 014-4h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    ),
  },
  {
    step: '04',
    tone: 'orange',
    title: 'Make Fair Decisions',
    description:
      'Use our bias-free evaluation tools and detailed candidate insights to make informed, equitable hiring decisions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/>
        <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    ),
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2>How It Works</h2>
          <p>Our streamlined process ensures fair, efficient, and successful hiring outcomes</p>
        </div>
        <div className={styles.grid}>
          {STEPS.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
        <div className={styles.note}>
          <span className={styles.dot} aria-hidden="true" />
          <span>Average setup time: 15 minutes</span>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
