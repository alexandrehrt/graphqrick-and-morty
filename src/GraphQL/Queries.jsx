import { gql } from "@apollo/client";

export const LOAD_CHARACTERS = gql`
query loadCharacters{
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
`;

export const LOAD_CHARACTER = gql`
  query loadCharacter($id: ID!) {
    character(id: $id) {
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        id
        name
        air_date
      }
    }
  }
`;

export const LOAD_EPISODES = gql`
  query loadEpisodes{
    episodes {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const LOAD_LOCATIONS = gql`
  query loadLocations {
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
`;