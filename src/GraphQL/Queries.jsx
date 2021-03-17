import { gql } from "@apollo/client";

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

export const LOAD_EPISODE = gql`
  query loadEpisode($id: ID!) {
      episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`;


export const LOAD_LOCATION = gql`
  query loadLocation($id: ID!) {
      location(id: $id) {
      id
      name
      dimension
      residents {
        id
        name
        image
      }
    }
  }
`;