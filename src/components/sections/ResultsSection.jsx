import Container from '../atoms/Container.jsx';
import styles from './ResultsSection.module.css';

const RESULTS = [
  {
    value: '2,500+',
    label: 'Successful placements across Armenia',
  },
  {
    value: '150+',
    label: 'Partner companies actively hiring',
  },
  {
    value: '94%',
    label: 'Bias reduction with AI-driven screening',
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>Results That Speak for Themselves</h2>
          <p>
            HireAI Armenia is already helping teams make faster, fairer hiring decisions across the
            country.
          </p>
        </div>
        <div className={styles.grid}>
          {RESULTS.map((result) => (
            <div key={result.value} className={styles.card}>
              <h3>{result.value}</h3>
              <p>{result.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResultsSection;
