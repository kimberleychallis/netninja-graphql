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

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App container">
        {/* <header className="App-header">
          <h1>Kimberley's Reading List</h1>
        </header> */}
        <div className="row">
          <div className="col-3">
            <AddBook />
          </div>
          <div className="col-9">
            <BookList />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
