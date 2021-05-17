import React from "react";
import { useQuery } from "@apollo/client";
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
        <div className="BookDetails">
          {/* Am aware that this is semantically all wrong */}
          <h2>Book details</h2>
          <p>
            <span className="fw-bold">Name:</span>{" "}
            <span className="fst-italic">{data.book.name}</span>
          </p>
          <p>
            <span className="fw-bold">Genre:</span> {data.book.genre}
          </p>
          <p>
            <span className="fw-bold">Author:</span> {data.book.author.name}
          </p>
          <h4>All available books by this author: </h4>
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
