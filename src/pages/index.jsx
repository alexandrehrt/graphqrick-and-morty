import Head from 'next/head';
import Dashboard from '../components/dashboard';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rick and MortyQL</title>
      </Head>

      <div className={styles.container}>
        <Dashboard />
      </div>
    </div>
  );
};
