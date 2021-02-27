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