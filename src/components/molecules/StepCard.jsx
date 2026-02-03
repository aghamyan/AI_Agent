import IconBadge from '../atoms/IconBadge.jsx';
import styles from './StepCard.module.css';

const StepCard = ({ step, tone, icon, title, description }) => {
  return (
    <article className={styles.card}>
      <div className={styles.topRow}>
        <IconBadge tone={tone}>{icon}</IconBadge>
        <span className={styles.step}>{step}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default StepCard;
