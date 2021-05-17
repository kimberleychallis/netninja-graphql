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
    <div className="">
      <div className="row">
        <div className="col">
          <h2>Reading list</h2>
          <ul className="BookList">{displayBooks()}</ul>
        </div>
        <div className="col">
          <BookDetails bookID={selectedBook} />
        </div>
      </div>
    </div>
  );
};

export default BookList;
