import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Cliploader from 'react-spinners/ClipLoader'
import Navbar from '../components/Navbar';
import Link from 'next/link';

import { LOAD_LOCATION } from '../GraphQL/Queries';
import styles from '../styles/pages/Location.module.css';

export default function  Episode() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(LOAD_LOCATION, {
    variables: { id }
  });

  if (loading) return <Cliploader />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const { name, dimension, residents} = data.location;

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.locationInfo}>
        <h1>{name}</h1>
        <p>{dimension}</p>
      </div>

      <div className={styles.locationCharacters}>
        <ul>
          { residents.map(resident => (
            <li key={resident.name}>
              <Link href={{
                pathname: '/character',
                query: { id: resident.id }
              }}>
                <a>
                  <img src={resident.image} alt={resident.name}/>
                  <h2>{resident.name}</h2>
                </a>
              </Link>
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
}