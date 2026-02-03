import styles from './InsightBadge.module.css';

const InsightBadge = ({ label, icon }) => {
  return (
    <div className={styles.badge}>
      <span className={styles.icon}>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default InsightBadge;
