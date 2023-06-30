/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createGolfer = /* GraphQL */ `
  mutation CreateGolfer(
    $input: CreateGolferInput!
    $condition: ModelGolferConditionInput
  ) {
    createGolfer(input: $input, condition: $condition) {
      id
      name
      mobile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGolfer = /* GraphQL */ `
  mutation UpdateGolfer(
    $input: UpdateGolferInput!
    $condition: ModelGolferConditionInput
  ) {
    updateGolfer(input: $input, condition: $condition) {
      id
      name
      mobile
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGolfer = /* GraphQL */ `
  mutation DeleteGolfer(
    $input: DeleteGolferInput!
    $condition: ModelGolferConditionInput
  ) {
    deleteGolfer(input: $input, condition: $condition) {
      id
      name
      mobile
      createdAt
      updatedAt
      __typename
    }
  }
`;
