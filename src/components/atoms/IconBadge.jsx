import styles from './IconBadge.module.css';

const IconBadge = ({ tone = 'blue', children }) => {
  const classes = [styles.badge, styles[tone]].join(' ');
  return <span className={classes}>{children}</span>;
};

export default IconBadge;
