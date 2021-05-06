import { gql } from "@apollo/client";

const getBooksQuery = gql`
  query getBooks {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  query getAuthors {
    authors {
      name
      age
      id
    }
  }
`;

const addBookMutation = gql`
  mutation addBook {
    addBook(name: "", genre: "", authorID: "") {
      name
      id
    }
  }
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation };