import { useQuery } from '@apollo/client';
import Cliploader from 'react-spinners/ClipLoader'
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
            <span id={styles.episodeName}>{episode.name}</span>
            <span  id={styles.episodeDetails}>{episode.episode} - {episode.air_date}</span>
          </li>
          ))}
      </ul>
  </div>
  );
};