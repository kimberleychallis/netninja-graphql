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
  mutation addBook($name: String!, $genre: String!, $authorID: ID!) {
    addBook(name: $name, genre: $genre, authorID: $authorID) {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query getBook($id: String) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery };
