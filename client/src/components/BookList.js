import React from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  query getBooks {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  // console.log(data);
  // console.log(data.books[0].id);
  return data.books.map((book) => {
    return <li key={book.id}>{book.name}</li>;
  });
};

export default BookList;
