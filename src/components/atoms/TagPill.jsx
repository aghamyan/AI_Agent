import styles from './TagPill.module.css';

const TagPill = ({ icon, text }) => {
  return (
    <span className={styles.pill}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </span>
  );
};

export default TagPill;
