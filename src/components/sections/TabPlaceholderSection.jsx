import Container from '../atoms/Container.jsx';
import styles from './TabPlaceholderSection.module.css';

const TabPlaceholderSection = ({ title, description, onBack = () => {} }) => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <button className={styles.backLink} type="button" onClick={onBack}>
          <span aria-hidden="true">←</span>
          Back to Home
        </button>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Page Preview</p>
          <h2>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </Container>
    </section>
  );
};

export default TabPlaceholderSection;
