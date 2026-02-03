import Container from '../atoms/Container.jsx';
import styles from './AdminDashboardSection.module.css';

const STATS = [
  {
    title: 'Total Users',
    value: '2,847',
    change: '+12%',
    icon: '👥',
    tone: 'blue',
  },
  {
    title: 'Active Companies',
    value: '156',
    change: '+8%',
    icon: '🏢',
    tone: 'green',
  },
  {
    title: 'Monthly Hires',
    value: '492',
    change: '+23%',
    icon: '📊',
    tone: 'purple',
  },
  {
    title: 'System Health',
    value: '99.8%',
    change: 'stable',
    icon: '📈',
    tone: 'orange',
  },
];

const ACTIVITIES = [
  {
    text: 'New employer registered: Tech Armenia',
    time: '2 hours ago',
    icon: '✅',
  },
  {
    text: 'AI model performance optimization completed',
    time: '4 hours ago',
    icon: '🕒',
  },
  {
    text: 'GDPR compliance check passed',
    time: '6 hours ago',
    icon: '✅',
  },
  {
    text: 'High API usage detected - monitoring',
    time: '1 day ago',
    icon: '⚠️',
  },
];

const ALERTS = [
  {
    title: 'High API Usage',
    text: 'API usage is 85% of monthly limit',
    time: '2 hours ago',
    tone: 'warning',
  },
  {
    title: 'Scheduled Maintenance',
    text: 'System maintenance scheduled for tomorrow 2:00 AM',
    time: '1 day ago',
    tone: 'info',
  },
];

const AdminDashboardSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.headerBar}>
        <div className={styles.brand}>
          <div className={styles.logo}>AI</div>
          <span>HireAI Armenia</span>
        </div>
        <nav className={styles.topNav} aria-label="Admin navigation">
          <button type="button" className={styles.navButton}>
            Dashboard
          </button>
          <button type="button" className={styles.navButton}>
            Schedule
          </button>
        </nav>
        <div className={styles.avatar}>AU</div>
      </Container>
      <div className={styles.divider} />
      <Container>
        <div className={styles.pageHeader}>
          <div>
            <h1>Admin Dashboard</h1>
            <p>Platform management and oversight</p>
          </div>
          <button className={styles.scheduleButton} type="button">
            <span aria-hidden="true">🕒</span>
            View Schedule
          </button>
        </div>
        <div className={styles.subTabs} role="tablist" aria-label="Admin dashboard tabs">
          {['Overview', 'Users', 'System', 'Analytics', 'Profile'].map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`${styles.subTab} ${index === 0 ? styles.subTabActive : ''}`.trim()}
              role="tab"
              aria-selected={index === 0}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.statsGrid}>
          {STATS.map((stat) => (
            <div key={stat.title} className={styles.statCard}>
              <div>
                <p>{stat.title}</p>
                <h3>{stat.value}</h3>
                <span className={styles.statChange}>{stat.change}</span>
              </div>
              <div className={`${styles.statIcon} ${styles[stat.tone]}`}>{stat.icon}</div>
            </div>
          ))}
        </div>
        <div className={styles.contentGrid}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2>Recent Activities</h2>
              <p>Latest platform activities and events</p>
            </div>
            <div className={styles.activityList}>
              {ACTIVITIES.map((activity) => (
                <div key={activity.text} className={styles.activityItem}>
                  <span className={styles.activityIcon}>{activity.icon}</span>
                  <div>
                    <p>{activity.text}</p>
                    <span>{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2>System Alerts</h2>
              <p>Important system notifications</p>
            </div>
            <div className={styles.alertList}>
              {ALERTS.map((alert) => (
                <div key={alert.title} className={`${styles.alertItem} ${styles[alert.tone]}`}>
                  <div>
                    <div className={styles.alertTitleRow}>
                      <h3>{alert.title}</h3>
                      <button className={styles.dismissButton} type="button">
                        Dismiss
                      </button>
                    </div>
                    <p>{alert.text}</p>
                    <span>{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdminDashboardSection;
