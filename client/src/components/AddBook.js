import React from "react";
import { useQuery } from "@apollo/client";
import { getAuthorsQuery } from "../queries/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

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
        <select>
          {data.authors.map((author) => {
            return <option key={author.id}> {author.name}</option>;
          })}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
