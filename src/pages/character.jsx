import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import styles from '../styles/pages/Character.module.css';

import { LOAD_CHARACTER } from '../GraphQL/Queries';

export default function Character() {
  const router = useRouter();
  const { id } = router.query;


  const { loading, error, data } = useQuery(LOAD_CHARACTER, {
    variables: { id }
  });

  // TO DO: arrumar esse trecho
  if (loading) return <p className={styles.loading}>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const { name, gender, species, status, location, image, origin, episode } = data.character;

  return (
    <div className={styles.container}>
      <div className={styles.character}>
        {/* PROFILE PICTURE */}
        <div className={styles.imageContainer}>
          <img src={image}/>
          <h1>{name}</h1>
        </div>

        <div>
          {/* STATUS */}
          <div className={styles.info}>
            <div>
              <p>Status: </p>
              <span>{status}</span>
            </div>
            <div>
              <p>Species: </p>
              <span>{species}</span>
            </div>
            <div>
              <p>Gender: </p>                 
              <span>{gender}</span>
            </div>
          </div>
          {/* LOCATION */}
          <div className={styles.characterLocation}>
            <p>Location:</p>
            <span>{location.name}</span>
            <p>Origin:</p>              
            <span>{origin.name}</span>
          </div>
        </div>
      </div>

      {/* EPISODES LIST */}
      <div className={styles.episodes}>
        <h1>Episodes</h1>
        <ul>
          { episode.map(ep => (
            <li key={ep.id}>
              <Link href={{
                pathname: '/episode',
                query: { id: ep.id }
              }}>
                <a>
                  <span>{ep.name}</span>
                  <span>{ep.air_date}</span>
                </a>
              </Link>
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
}

