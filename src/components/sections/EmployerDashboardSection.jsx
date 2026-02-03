import Container from '../atoms/Container.jsx';
import styles from './EmployerDashboardSection.module.css';

const STAT_CARDS = [
  {
    title: 'Active Jobs',
    value: '8',
    delta: '+2 this week',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 3.5h7.5L19 8v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M14.5 3.5V8H19" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    colorClass: styles.iconBlue,
  },
  {
    title: 'Total Applications',
    value: '342',
    delta: '+23 today',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.5" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M3.5 20c.4-3.6 3.1-6 6.5-6s6 2.4 6.5 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    colorClass: styles.iconGreen,
  },
  {
    title: 'AI Matches',
    value: '89',
    delta: '94% accuracy',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="4.5"
          y="6.5"
          width="15"
          height="11"
          rx="2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M9 6.5V4.8m6 1.7V4.8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    colorClass: styles.iconPurple,
  },
  {
    title: 'Interviews Scheduled',
    value: '15',
    delta: 'This week',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="4.5"
          y="5.5"
          width="15"
          height="14"
          rx="2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M8 4v3m8-3v3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 10.5h15" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    colorClass: styles.iconOrange,
  },
];

const APPLICATIONS = [
  {
    initials: 'DH',
    name: 'Davit Harutyunyan',
    role: 'Senior React Developer',
    match: '95% match',
    time: '2 hours ago',
  },
  {
    initials: 'AG',
    name: 'Anna Grigoryan',
    role: 'Product Manager',
    match: '88% match',
    time: '4 hours ago',
  },
  {
    initials: 'AP',
    name: 'Armen Petrosyan',
    role: 'Senior React Developer',
    match: '91% match',
    time: '6 hours ago',
  },
];

const METRICS = [
  { label: 'Match Accuracy', value: 94, colorClass: styles.barGreen },
  { label: 'Time Saved', value: 68, colorClass: styles.barBlue },
  { label: 'Diversity Score', value: 87, colorClass: styles.barPurple },
];

const EmployerDashboardSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.topNav}>
        <Container className={styles.topNavInner}>
          <div className={styles.brand}>
            <div className={styles.brandMark}>AI</div>
            <span className={styles.brandName}>HireAI Armenia</span>
          </div>
          <nav className={styles.topLinks} aria-label="Employer dashboard">
            <span className={styles.topLinkActive}>Dashboard</span>
            <span>Schedule</span>
          </nav>
          <div className={styles.avatar}>EU</div>
        </Container>
      </div>

      <Container className={styles.content}>
        <div className={styles.headerRow}>
          <div>
            <h1>Employer Dashboard</h1>
            <p>Welcome back, Armen Sarkissian</p>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.outlineButton} type="button">
              <span className={styles.iconButton} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              Schedule
            </button>
            <button className={styles.primaryButton} type="button">
              <span className={styles.iconButton} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              Post New Job
            </button>
          </div>
        </div>

        <div className={styles.tabStrip}>
          {['Overview', 'AI Agent', 'Job Posts', 'Candidates', 'Analytics', 'Profile'].map(
            (label, index) => (
              <span
                className={`${styles.tab} ${index === 0 ? styles.tabActive : ''}`.trim()}
                key={label}
              >
                {label}
              </span>
            ),
          )}
        </div>

        <div className={styles.statsGrid}>
          {STAT_CARDS.map((card) => (
            <article className={styles.statCard} key={card.title}>
              <div>
                <p className={styles.statLabel}>{card.title}</p>
                <p className={styles.statValue}>{card.value}</p>
                <p className={styles.statDelta}>{card.delta}</p>
              </div>
              <div className={`${styles.statIcon} ${card.colorClass}`}>{card.icon}</div>
            </article>
          ))}
        </div>

        <div className={styles.bottomGrid}>
          <section className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2>Recent Applications</h2>
              <p>Latest candidate applications</p>
            </div>
            <div className={styles.applicationList}>
              {APPLICATIONS.map((item) => (
                <div className={styles.applicationCard} key={item.name}>
                  <div className={styles.applicationAvatar}>{item.initials}</div>
                  <div className={styles.applicationInfo}>
                    <p className={styles.applicationName}>{item.name}</p>
                    <p className={styles.applicationRole}>{item.role}</p>
                  </div>
                  <div className={styles.applicationMeta}>
                    <span className={styles.matchTag}>{item.match}</span>
                    <span className={styles.applicationTime}>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2>AI Agent Performance</h2>
              <p>Your AI recruiting assistant metrics</p>
            </div>
            <div className={styles.metricList}>
              {METRICS.map((metric) => (
                <div className={styles.metricRow} key={metric.label}>
                  <div className={styles.metricHeader}>
                    <span>{metric.label}</span>
                    <span className={styles.metricValue}>{metric.value}%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <div
                      className={`${styles.progressBar} ${metric.colorClass}`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default EmployerDashboardSection;
