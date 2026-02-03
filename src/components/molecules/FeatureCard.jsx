import IconBadge from '../atoms/IconBadge.jsx';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ tone, title, description, icon }) => {
  return (
    <article className={styles.card}>
      <IconBadge tone={tone}>{icon}</IconBadge>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default FeatureCard;
