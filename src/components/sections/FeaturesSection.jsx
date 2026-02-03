import Container from '../atoms/Container.jsx';
import FeatureCard from '../molecules/FeatureCard.jsx';
import InsightBadge from '../molecules/InsightBadge.jsx';
import styles from './FeaturesSection.module.css';

const FEATURES = [
  {
    tone: 'blue',
    title: 'AI-Powered Matching',
    description:
      'Advanced algorithms analyze skills, experience, and cultural fit to find the perfect candidates for your positions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.686 2 6 4.686 6 8v1.5C6 10.88 4.88 12 3.5 12v2c1.38 0 2.5 1.12 2.5 2.5V18c0 3.314 2.686 6 6 6s6-2.686 6-6v-1.5c0-1.38 1.12-2.5 2.5-2.5v-2c-1.38 0-2.5-1.12-2.5-2.5V8c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 9h6M9 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    tone: 'green',
    title: 'Bias-Free Hiring',
    description:
      'Eliminate unconscious bias with anonymous screening and objective evaluation criteria based purely on qualifications.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l7 3v6c0 4.418-3.134 8.53-7 9-3.866-.47-7-4.582-7-9V5l7-3z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9.5 12l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    tone: 'purple',
    title: 'Diversity Promotion',
    description:
      'Actively promote workplace diversity while maintaining merit-based selection for stronger, more innovative teams.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7a3 3 0 106 0 3 3 0 00-6 0z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 19v-1a4 4 0 014-4h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 10a3 3 0 106 0 3 3 0 00-6 0z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 19v-1a4 4 0 014-4h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    tone: 'orange',
    title: 'Smart Analytics',
    description:
      'Comprehensive insights into your hiring process with detailed metrics and recommendations for improvement.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 20V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 20V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 20H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    tone: 'red',
    title: 'Faster Recruitment',
    description:
      'Reduce time-to-hire by up to 70% with automated screening and intelligent candidate ranking systems.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    tone: 'teal',
    title: 'Local Expertise',
    description:
      'Tailored for the Armenian market with understanding of local education, skills, and cultural nuances.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2>Why Choose HireAI Armenia?</h2>
          <p>
            Our platform combines cutting-edge AI technology with deep understanding of Armenia&apos;s
            unique talent landscape
          </p>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <div className={styles.insights}>
          <InsightBadge icon="AI" label="Machine Learning" />
          <InsightBadge icon="🇦🇲" label="Local Focus" />
          <InsightBadge icon="⚖️" label="Fair & Ethical" />
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
