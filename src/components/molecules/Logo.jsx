import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.mark}>AI</span>
      <span className={styles.text}>HireAI Armenia</span>
    </div>
  );
};

export default Logo;
