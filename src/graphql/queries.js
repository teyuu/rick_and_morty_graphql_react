import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query getCharacters($page:Int,$name: String,$status: String,$gender: String,$species: String ){
    characters(page:$page, filter: { name: $name, status:$status,gender:$gender,species:$species}) { 
      results {
        id
        name
        status
        gender
        species
        image
      }
      info {
                count
                pages
                next
                prev
            }
    }
  }
`;

export const GET_FILTERS = gql`
  query GET_FILTERS {
    characters {
      results {
        status
        gender
        species
      }
    }
  }
`;
