import { useQuery } from '@apollo/client';
import Cliploader from 'react-spinners/ClipLoader'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { LOAD_EPISODES } from '../GraphQL/Queries';

import styles from '../styles/pages/Episodes.module.css';

export default function Episodes() {
  const { loading, error, data } = useQuery(LOAD_EPISODES);

  if (loading) return <Cliploader />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div>
      <Navbar />
      <ul className={styles.episodesList}>
        { data.episodes.results.map(episode => (
          <li className={styles.episodeItem} key={episode.id}>
            <Link href={{
              pathname: '/episode',
              query: { id: episode.id }
            }}>
              <a>
                <p id={styles.episodeName}>{episode.name}</p>
                <p  id={styles.episodeDetails}>{episode.episode} - {episode.air_date}</p>
              </a>
            </Link>
          </li>
          ))}
      </ul>
  </div>
  );
};