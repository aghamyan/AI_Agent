import Container from '../atoms/Container.jsx';
import Button from '../atoms/Button.jsx';
import styles from './PageEditorBar.module.css';

const TABS = [
  'Home',
  'Signup',
  'Admin Dashboard',
  'Employer Dashboard',
  'Employee Dashboard',
  'Admin Schedule',
  'Employer Schedule',
  'Employee Schedule',
];

const PageEditorBar = () => {
  return (
    <section className={styles.pageEditor}>
      <Container className={styles.topRow}>
        <div>
          <p className={styles.eyebrow}>Page Editor</p>
        </div>
        <Button variant="secondary" className={styles.viewAllButton}>
          View All Pages
        </Button>
      </Container>
      <Container>
        <div className={styles.tabs} role="tablist" aria-label="Page list">
          {TABS.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`${styles.tab} ${index === 0 ? styles.active : ''}`.trim()}
              aria-selected={index === 0}
              role="tab"
            >
              {tab}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PageEditorBar;
