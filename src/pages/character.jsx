import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

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
  const { name, gender, species, status, location, image, origin } = data.character;

  return (
    <div className={styles.container}>
      <div className={styles.character}>

        <img src={image}/>
        <h1>{name}</h1>

        {/* <div className={styles.infoContainer}> */}
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
            <div>
              <p>Location:</p>
              <span>{location.name}</span>
            </div>
            <div>
              <p>Origin:</p>
              <span>{origin.name}</span>
            </div>
          </div>
        </div>

      {/* </div> */}

      <div className={styles.episodes}>
        <ul>
          <li>episodios</li>
          <li>episodios</li>
          <li>episodios</li>
          <li>episodios</li>
          <li>episodios</li>
          <li>episodios</li>
          <li>episodios</li>
          <li>episodios</li>
          <li>episodios</li>
          <li>episodios</li>
          <li>episodios</li>
        </ul>
      </div>
    </div>
  )
}