import React from "react";
import { useQuery, gql } from "@apollo/client";

const getAuthorsQuery = gql`
  query getAuthors {
    authors {
      name
      age
    }
  }
`;

const AddBook = () => {
  return (
    <form className="AddBook">
      <div className="field">
        <label>Book name</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author</label>
        <select>Select author</select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
