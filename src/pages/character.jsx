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

  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  console.log(data);
  const { name, gender, species, status, location, image, origin, episode } = data.character;

  return (
    <div className={styles.container}>
      <div className={styles.character}>

        <img src={image}/>
        <h1>{name}</h1>

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

          <div className={styles.characterLocation}>
              <p>Location:</p>
              <span>{location.name}</span>
              <p>Origin:</p>              
              <span>{origin.name}</span>
          </div>
        </div>

      <div className={styles.episodes}>
        <h1>Episodes</h1>
        <ul>
          { episode.map(ep => (
            <li key={ep.id}>
              <Link href='#'>
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