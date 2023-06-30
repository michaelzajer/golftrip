/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGolfer = /* GraphQL */ `
  query GetGolfer($id: ID!) {
    getGolfer(id: $id) {
      id
      golfername
      mobile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGolfers = /* GraphQL */ `
  query ListGolfers(
    $filter: ModelGolferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGolfers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        golfername
        mobile
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
