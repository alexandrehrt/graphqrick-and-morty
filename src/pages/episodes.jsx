import Link from 'next/link';
import Navbar from '../components/Navbar';
import client from '../apollo-client';
import { gql } from "@apollo/client";

import styles from '../styles/pages/Episodes.module.css';

export default function Episodes({ data }) {

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

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`{
      episodes {
        results {
          id
          name
          air_date
          episode
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