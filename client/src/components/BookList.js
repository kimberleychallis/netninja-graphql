import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

import BookDetails from "./BookDetails";

const BookList = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const displayBooks = () => {
    return data.books.map((book) => {
      return (
        <li
          key={book.id}
          onClick={() => {
            setSelectedBook(book.id);
          }}
        >
          {book.name}
        </li>
      );
    });
  };

  return (
    <div>
      {displayBooks()}
      <BookDetails bookID={selectedBook} />
    </div>
  );
};

export default BookList;
