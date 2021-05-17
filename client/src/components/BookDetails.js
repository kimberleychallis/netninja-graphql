import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = (props) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: {
      id: props.bookID,
    },
  });

  const displayBookDetails = (loading, error, data) => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    if (data.book) {
      return (
        <div>
          <p>{data.book.name}</p>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>Also by this author: </p>
          <ul className="other-books">
            {data.book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    }
  };

  return <div>{displayBookDetails(loading, error, data)}</div>;
};

export default BookDetails;
