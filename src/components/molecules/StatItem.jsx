import styles from './StatItem.module.css';

const StatItem = ({ color, text }) => {
  const classes = [styles.dot, styles[color]].join(' ');
  return (
    <div className={styles.item}>
      <span className={classes} aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
};

export default StatItem;
