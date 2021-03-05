import { useQuery } from '@apollo/client';
import Cliploader from 'react-spinners/ClipLoader'
import Navbar from '../components/Navbar';
import { LOAD_CHARACTERS } from '../GraphQL/Queries';
import Link from 'next/link';

import styles from '../styles/pages/Characters.module.css';

export default function Characters() {
  const { loading, error, data } = useQuery(LOAD_CHARACTERS);

  if (loading) return <Cliploader />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div>
      <Navbar />

      <div className={styles.charactersContainer}>
        <input type='text' placeholder='Search character' />

        <div className={styles.charactersCardContainer}>
          { data.characters.results.map(character => (
            <Link href={{
              pathname: '/character',
              query: { id: character.id }
            }}>
              <a key={character.id} className={styles.charactersCard}>
                <img src={character.image}/>
                <span id={styles.characterName}>{character.name}</span>
                <span id={styles.episodes}>Episodes: {character.episode.length}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
