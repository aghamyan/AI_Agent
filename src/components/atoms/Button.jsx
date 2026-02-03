import styles from './Button.module.css';

const Button = ({ variant = 'primary', children, icon = null, className = '' }) => {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  return (
    <button className={classes} type="button">
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
