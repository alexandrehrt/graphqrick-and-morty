import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Navbar from '../components/Navbar';

import styles from '../styles/pages/Locations.module.css';

import { LOAD_LOCATIONS } from '../GraphQL/Queries';

export default function Locations(){
  const { loading, error, data } = useQuery(LOAD_LOCATIONS);

  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div>
      <Navbar />
      <ul className={styles.locationsList}>
        { data.locations.results.map(location => (
          <li key={location.id}>
            <Link href='#'>
              <a>
                <p>Name: {location.name}</p>
                <p>Type: {location.type}</p>
                <p>Dimension: {location.dimension}</p>
                <p>Residents: {location.residents.length}</p>
              </a>
            </Link>
          </li>
        )) }
      </ul>
    </div>
  )
}