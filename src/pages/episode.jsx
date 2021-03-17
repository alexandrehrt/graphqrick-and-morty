import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Cliploader from 'react-spinners/ClipLoader'
import Navbar from '../components/Navbar';
import Link from 'next/link';

import { LOAD_EPISODE } from '../GraphQL/Queries';
import styles from '../styles/pages/Episode.module.css';

export default function  Episode() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(LOAD_EPISODE, {
    variables: { id }
  });

  if (loading) return <Cliploader />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const {name, air_date, episode, characters} = data.episode;

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.episodeInfo}>
        <h1>{name}</h1>
        <p>{episode}</p>
        <p>Air date: {air_date}</p>
      </div>

      <div className={styles.episodeCharacters}>
        <ul>
          { characters.map(character => (
            <li key={character.id}>
              <Link href='#'>
                <a>
                  <img src={character.image} alt={character.name}/>
                  <h2 className={styles.caption}>{character.name}</h2>
                </a>
              </Link>
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
}