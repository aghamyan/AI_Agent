import Container from '../atoms/Container.jsx';
import Button from '../atoms/Button.jsx';
import TagPill from '../atoms/TagPill.jsx';
import StatItem from '../molecules/StatItem.jsx';
import styles from './HeroSection.module.css';
import heroImage from '../../assets/meeting.svg';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <TagPill icon={<span role="img" aria-label="Armenia flag">🇦🇲</span>} text="Made for Armenia" />
          <h1>AI-Driven Fair Hiring for Armenia&apos;s Future</h1>
          <p>
            Transform your recruitment process with intelligent candidate matching that eliminates
            bias and promotes diversity, specifically designed for the Armenian job market.
          </p>
          <div className={styles.actions}>
            <Button>Start Free Trial</Button>
            <Button variant="secondary" icon={<span className={styles.playIcon}>▶</span>}>
              Watch Demo
            </Button>
          </div>
          <div className={styles.stats}>
            <StatItem color="green" text="94% Bias Reduction" />
            <StatItem color="blue" text="3x Faster Hiring" />
            <StatItem color="purple" text="89% Match Accuracy" />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.statCardTop}>
            <strong>2,500+</strong>
            <span>Successful Placements</span>
          </div>
          <img src={heroImage} alt="Team collaborating in an office" />
          <div className={styles.statCardBottom}>
            <strong>150+</strong>
            <span>Partner Companies</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
