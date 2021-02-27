import styles from '../styles/components/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <a className={styles.homeIcon} href='#'>
        <img src="snuffles.jpg" alt="Rick"/>
      </a>
      <a className={styles.githubIcon} href="http://">
        <img src="github-icon.png" alt="Github"/>
      </a>
    </div>
  );
};