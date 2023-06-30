/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateGolferInput = {
  id?: string | null,
  golfername: string,
  mobile?: string | null,
};

export type ModelGolferConditionInput = {
  golfername?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  and?: Array< ModelGolferConditionInput | null > | null,
  or?: Array< ModelGolferConditionInput | null > | null,
  not?: ModelGolferConditionInput | null,
};

export type Golfer = {
  __typename: "Golfer",
  id: string,
  golfername: string,
  mobile?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGolferInput = {
  id: string,
  golfername?: string | null,
  mobile?: string | null,
};

export type DeleteGolferInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelGolferFilterInput = {
  id?: ModelIDInput | null,
  golfername?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  and?: Array< ModelGolferFilterInput | null > | null,
  or?: Array< ModelGolferFilterInput | null > | null,
  not?: ModelGolferFilterInput | null,
};

export type ModelGolferConnection = {
  __typename: "ModelGolferConnection",
  items:  Array<Golfer | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionGolferFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  golfername?: ModelSubscriptionStringInput | null,
  mobile?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGolferFilterInput | null > | null,
  or?: Array< ModelSubscriptionGolferFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGolferMutationVariables = {
  input: CreateGolferInput,
  condition?: ModelGolferConditionInput | null,
};

export type CreateGolferMutation = {
  createGolfer?:  {
    __typename: "Golfer",
    id: string,
    golfername: string,
    mobile?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGolferMutationVariables = {
  input: UpdateGolferInput,
  condition?: ModelGolferConditionInput | null,
};

export type UpdateGolferMutation = {
  updateGolfer?:  {
    __typename: "Golfer",
    id: string,
    golfername: string,
    mobile?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGolferMutationVariables = {
  input: DeleteGolferInput,
  condition?: ModelGolferConditionInput | null,
};

export type DeleteGolferMutation = {
  deleteGolfer?:  {
    __typename: "Golfer",
    id: string,
    golfername: string,
    mobile?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGolferQueryVariables = {
  id: string,
};

export type GetGolferQuery = {
  getGolfer?:  {
    __typename: "Golfer",
    id: string,
    golfername: string,
    mobile?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGolfersQueryVariables = {
  filter?: ModelGolferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGolfersQuery = {
  listGolfers?:  {
    __typename: "ModelGolferConnection",
    items:  Array< {
      __typename: "Golfer",
      id: string,
      golfername: string,
      mobile?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGolferSubscriptionVariables = {
  filter?: ModelSubscriptionGolferFilterInput | null,
};

export type OnCreateGolferSubscription = {
  onCreateGolfer?:  {
    __typename: "Golfer",
    id: string,
    golfername: string,
    mobile?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGolferSubscriptionVariables = {
  filter?: ModelSubscriptionGolferFilterInput | null,
};

export type OnUpdateGolferSubscription = {
  onUpdateGolfer?:  {
    __typename: "Golfer",
    id: string,
    golfername: string,
    mobile?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGolferSubscriptionVariables = {
  filter?: ModelSubscriptionGolferFilterInput | null,
};

export type OnDeleteGolferSubscription = {
  onDeleteGolfer?:  {
    __typename: "Golfer",
    id: string,
    golfername: string,
    mobile?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
