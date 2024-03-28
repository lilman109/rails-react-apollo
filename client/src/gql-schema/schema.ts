import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

export const GET_USER = gql`
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

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(input: { name: $name, email: $email }) {
      user {
        id
        name
        email
        postsCount
      }
      errors
    }
  }
`;

