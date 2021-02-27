import Link from 'next/link'

import Navbar from '../components/Navbar';

import styles from '../styles/components/Dashboard.module.css';

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <section className={styles.dashboardContainer}>
        <Link href='/characters'>
          <a className={styles.card} id={styles.characters} >
            <span>Characters</span>
          </a>
        </Link>

        <Link href='/episodes'>
          <a className={styles.card} id={styles.episodes}>
            <span>Episodes</span>
          </a>
        </Link>

        <Link href='/locations'>
          <a className={styles.card} id={styles.locations}>
            <span>Locations</span>
          </a>
        </Link>
      </section>
    </div>
  );
};