import Link from 'next/link';
import styles from '../styles/components/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href={{ pathname: '/'}}>
        <a className={styles.homeIcon}>
          <img src="logo.png" alt="Home"/>
          Rick and Morty GraphQL
        </a>
      </Link>

      <Link href='https://github.com/alexandrehrt/graphqrick-and-morty'>
        <a className={styles.githubIcon}>
          <img src="github-icon.png" alt="Github"/>
        </a>
      </Link>
    </div>
  );
};