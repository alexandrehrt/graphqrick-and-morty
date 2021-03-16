import Navbar from '../components/Navbar';
import Link from 'next/link';
import client from '../apollo-client';
import { gql } from "@apollo/client";

import styles from '../styles/pages/Characters.module.css';

export default function Characters({ data }) {

  return (
    <div>
      <Navbar />

      <div className={styles.charactersContainer}>
        <input type='text' placeholder='Search character' />

        <div className={styles.charactersCardContainer}>
          { data.characters.results.map(character => (
            <Link key={character.id} href={{
              pathname: '/character',
              query: { id: character.id }
            }}>
              <a className={styles.charactersCard}>
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

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`{
      characters {
        results {
          id
          name
          status
          species
          gender
          origin {
            id
            name
            dimension
          }
          image
          episode {
            id
            name
            air_date
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
