import Container from '../atoms/Container.jsx';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id="about" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div>
            <p className={styles.tag}>Made for Armenia</p>
            <h2>Built with Local Insight</h2>
            <p>
              HireAI Armenia combines ethical AI with a deep understanding of local talent markets,
              helping companies build diverse teams that reflect Armenia&apos;s future.
            </p>
          </div>
          <div className={styles.panel}>
            <h3>What you get</h3>
            <ul>
              <li>Localized talent insights and benchmarks.</li>
              <li>Compliance-ready hiring workflows.</li>
              <li>Dedicated support in your time zone.</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
