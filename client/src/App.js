import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Components
import BookList from "./components/BookList";

// Styles
import "./App.css";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>Kimberley's Reading List</h1>
        </header>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
