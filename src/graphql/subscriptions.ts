/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateGolfer = /* GraphQL */ `
  subscription OnCreateGolfer($filter: ModelSubscriptionGolferFilterInput) {
    onCreateGolfer(filter: $filter) {
      id
      name
      mobile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateGolfer = /* GraphQL */ `
  subscription OnUpdateGolfer($filter: ModelSubscriptionGolferFilterInput) {
    onUpdateGolfer(filter: $filter) {
      id
      name
      mobile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteGolfer = /* GraphQL */ `
  subscription OnDeleteGolfer($filter: ModelSubscriptionGolferFilterInput) {
    onDeleteGolfer(filter: $filter) {
      id
      name
      mobile
      createdAt
      updatedAt
      __typename
    }
  }
`;
