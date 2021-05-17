import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  const [addBookDataMutation, { dataMutation }] = useMutation(addBookMutation);

  const [bookName, setBookName] = useState();
  const [bookGenre, setBookGenre] = useState();
  const [bookAuthor, setBookAuthor] = useState();

  // console.log(bookDetails);

  const handleSubmit = (event) => {
    event.preventDefault();
    addBookDataMutation({
      variables: {
        name: bookName,
        genre: bookGenre,
        authorID: bookAuthor,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <form className="AddBook" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name</label>
        <input type="text" onChange={(e) => setBookName(e.target.value)} />
      </div>
      <div className="field">
        <label>Genre</label>
        <input type="text" onChange={(e) => setBookGenre(e.target.value)} />
      </div>
      <div className="field">
        <label>Author</label>
        <select onChange={(e) => setBookAuthor(e.target.value)}>
          <option>Select author</option>
          {data.authors.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {" "}
                {author.name}
              </option>
            );
          })}
        </select>
      </div>
      <input type="submit" value="+" />
    </form>
  );
};

export default AddBook;
