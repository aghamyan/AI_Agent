import Container from '../atoms/Container.jsx';
import Button from '../atoms/Button.jsx';
import Logo from '../molecules/Logo.jsx';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo />
        <nav className={styles.nav} aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#results">Results</a>
          <a href="#about">About</a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.signIn} type="button">
            Sign In
          </button>
          <Button>Get Started</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
