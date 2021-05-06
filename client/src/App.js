import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
// import { gql } from "@apollo/client";

// Components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

// Styles
import "./App.css";

// Apollo client setup
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query GetBooks {
//         books {
//           name
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>Kimberley's Reading List</h1>
        </header>
        <ul className="BookList">
          <BookList />
        </ul>
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
