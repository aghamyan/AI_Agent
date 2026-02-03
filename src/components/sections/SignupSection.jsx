import Container from '../atoms/Container.jsx';
import styles from './SignupSection.module.css';

const SignupSection = () => {
  return (
    <section id="signup" className={styles.section}>
      <Container className={styles.container}>
        <a className={styles.backLink} href="#">
          <span aria-hidden="true">←</span>
          Back to Home
        </a>
        <div className={styles.card}>
          <div className={styles.logoBadge}>AI</div>
          <h2>Join HireAI Armenia</h2>
          <p className={styles.subtitle}>
            Create your account to start transforming your hiring process
          </p>
          <form className={styles.form}>
            <div className={styles.row}>
              <label className={styles.field}>
                <span>First Name</span>
                <input type="text" placeholder="" />
              </label>
              <label className={styles.field}>
                <span>Last Name</span>
                <input type="text" placeholder="" />
              </label>
            </div>
            <label className={styles.field}>
              <span>Email</span>
              <input type="email" placeholder="" />
            </label>
            <label className={styles.field}>
              <span>I am a...</span>
              <select defaultValue="">
                <option value="" disabled>
                  Select your role
                </option>
                <option value="employer">Employer</option>
                <option value="recruiter">Recruiter</option>
                <option value="candidate">Candidate</option>
              </select>
            </label>
            <label className={styles.field}>
              <span>Password</span>
              <input type="password" placeholder="" />
              <span className={styles.eye} aria-hidden="true">
                👁
              </span>
            </label>
            <label className={styles.field}>
              <span>Confirm Password</span>
              <input type="password" placeholder="" />
              <span className={styles.eye} aria-hidden="true">
                👁
              </span>
            </label>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span>
                I agree to the <strong>Terms of Service</strong> and{' '}
                <strong>Privacy Policy</strong>
              </span>
            </label>
            <button className={styles.submit} type="button">
              Create Account
            </button>
            <p className={styles.signInPrompt}>
              Already have an account? <strong>Sign in</strong>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SignupSection;
