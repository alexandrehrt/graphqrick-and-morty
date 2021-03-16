import Link from 'next/link';
import Navbar from '../components/Navbar';
import client from '../apollo-client';
import { gql } from "@apollo/client";

import styles from '../styles/pages/Locations.module.css';

export default function Locations({ data }){
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

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`{
      locations {
        results {
          id
          name
          type
          dimension
          residents {
            id
            name
          }
        }
      }
    }
  `,
  });

  return {
    props: {
      data
    }
  }
}