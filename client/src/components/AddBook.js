import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  // const displayAuthors = () => {
  //   return data.authors.map((author) => {
  //     return <option key={author.id}> {author.name}</option>;
  //   });
  // };

  const [bookDetails, setBookDetails] = useState({});
  const [bookName, setBookName] = useState();
  const [bookGenre, setBookGenre] = useState();
  const [bookAuthor, setBookAuthor] = useState();

  // console.log(bookDetails);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBookDetails({ name: bookName, genre: bookGenre, authorID: bookAuthor });
    // console.log(bookDetails);
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
        {/* <select>{displayAuthors()}</select> */}
      </div>
      <input type="submit" value="+" />
    </form>
  );
};

export default AddBook;
