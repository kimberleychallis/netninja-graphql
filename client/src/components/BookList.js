import React from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  query getBooks {
    books {
      name
    }
  }
`;

const BookList = (props) => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  // console.log(data);
  return (
    <div className="BookList">
      <ul id="book-list">
        {data.books.map((book, index) => {
          return <li key={index}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookList;
