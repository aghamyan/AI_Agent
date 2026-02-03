import Container from '../atoms/Container.jsx';
import styles from './AdminDashboardSection.module.css';

const METRICS = [
  {
    label: 'Total Users',
    value: '2,847',
    change: '+12%',
    icon: '👥',
    tone: 'blue',
  },
  {
    label: 'Active Companies',
    value: '156',
    change: '+8%',
    icon: '🏢',
    tone: 'green',
  },
  {
    label: 'Monthly Hires',
    value: '492',
    change: '+23%',
    icon: '📈',
    tone: 'purple',
  },
  {
    label: 'System Health',
    value: '99.8%',
    change: 'stable',
    icon: '📊',
    tone: 'orange',
  },
];

const ACTIVITIES = [
  {
    title: 'New employer registered: Tech Armenia',
    time: '2 hours ago',
    tone: 'success',
  },
  {
    title: 'AI model performance optimization completed',
    time: '4 hours ago',
    tone: 'info',
  },
  {
    title: 'GDPR compliance check passed',
    time: '6 hours ago',
    tone: 'success',
  },
  {
    title: 'High API usage detected - monitoring',
    time: '1 day ago',
    tone: 'warning',
  },
];

const ALERTS = [
  {
    title: 'High API Usage',
    description: 'API usage is 85% of monthly limit',
    time: '2 hours ago',
    tone: 'warning',
  },
  {
    title: 'Scheduled Maintenance',
    description: 'System maintenance scheduled for tomorrow 2:00 AM',
    time: '1 day ago',
    tone: 'info',
  },
];

const AdminDashboardSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.topBar}>
          <div className={styles.brand}>
            <span className={styles.logo}>AI</span>
            <span className={styles.brandName}>HireAI Armenia</span>
          </div>
          <nav className={styles.nav} aria-label="Admin dashboard navigation">
            <button className={styles.navItem} type="button">
              Dashboard
            </button>
            <button className={styles.navItem} type="button">
              Schedule
            </button>
          </nav>
          <div className={styles.avatar}>AU</div>
        </header>
        <div className={styles.divider} />
        <div className={styles.headerRow}>
          <div>
            <h1>Admin Dashboard</h1>
            <p className={styles.subtitle}>Platform management and oversight</p>
          </div>
          <button className={styles.scheduleButton} type="button">
            <span className={styles.scheduleIcon}>🕒</span>
            View Schedule
          </button>
        </div>
        <div className={styles.tabRow} role="tablist" aria-label="Admin dashboard sections">
          {['Overview', 'Users', 'System', 'Analytics', 'Profile'].map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`${styles.tab} ${index === 0 ? styles.activeTab : ''}`.trim()}
              role="tab"
              aria-selected={index === 0}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.metrics}>
          {METRICS.map((metric) => (
            <div key={metric.label} className={styles.metricCard}>
              <div>
                <p className={styles.metricLabel}>{metric.label}</p>
                <p className={styles.metricValue}>{metric.value}</p>
                <p className={`${styles.metricChange} ${styles[metric.tone]}`.trim()}>{metric.change}</p>
              </div>
              <span className={styles.metricIcon} aria-hidden="true">
                {metric.icon}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.grid}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <h2>Recent Activities</h2>
                <p>Latest platform activities and events</p>
              </div>
            </div>
            <div className={styles.list}>
              {ACTIVITIES.map((activity) => (
                <div key={activity.title} className={styles.listItem}>
                  <span className={`${styles.activityDot} ${styles[activity.tone]}`.trim()} />
                  <div>
                    <p className={styles.listTitle}>{activity.title}</p>
                    <p className={styles.listTime}>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <h2>System Alerts</h2>
                <p>Important system notifications</p>
              </div>
            </div>
            <div className={styles.alertList}>
              {ALERTS.map((alert) => (
                <div key={alert.title} className={`${styles.alertCard} ${styles[alert.tone]}`.trim()}>
                  <div>
                    <p className={styles.listTitle}>{alert.title}</p>
                    <p className={styles.listTime}>{alert.description}</p>
                    <p className={styles.listTime}>{alert.time}</p>
                  </div>
                  <button type="button" className={styles.dismissButton}>
                    Dismiss
                  </button>
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
