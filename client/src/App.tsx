"use server";
import "./App.css";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts {
        id
        title
      }
    }
  }
`;

function App() {
  const { data: users } = useQuery(USERS);
  const { data: user } = useQuery(USER, {
    variables: { id: 1 },
  });

  if (users) {
    console.log(users.users[3].name);
  }

  if (user) {
    console.log(user.user.email);
  }

  return <div className="App">Hello</div>;
}

export default App;
