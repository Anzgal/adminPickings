/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTaskInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  status?: string | null,
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
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

export type Task = {
  __typename: "Task",
  id: string,
  title: string,
  description?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  status?: string | null,
};

export type DeleteTaskInput = {
  id: string,
};

export type CreatePrivateNoteInput = {
  id?: string | null,
  content: string,
};

export type ModelPrivateNoteConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelPrivateNoteConditionInput | null > | null,
  or?: Array< ModelPrivateNoteConditionInput | null > | null,
  not?: ModelPrivateNoteConditionInput | null,
};

export type PrivateNote = {
  __typename: "PrivateNote",
  id: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePrivateNoteInput = {
  id: string,
  content?: string | null,
};

export type DeletePrivateNoteInput = {
  id: string,
};

export type CreateMarketInput = {
  id?: string | null,
  name: string,
  tags?: Array< string | null > | null,
  owner: string,
  createdAt?: string | null,
};

export type ModelMarketConditionInput = {
  name?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMarketConditionInput | null > | null,
  or?: Array< ModelMarketConditionInput | null > | null,
  not?: ModelMarketConditionInput | null,
};

export type Market = {
  __typename: "Market",
  id: string,
  name: string,
  products?: ModelPickConnection | null,
  tags?: Array< string | null > | null,
  owner: string,
  createdAt?: string | null,
  updatedAt: string,
};

export type ModelPickConnection = {
  __typename: "ModelPickConnection",
  items?:  Array<Pick | null > | null,
  nextToken?: string | null,
};

export type Pick = {
  __typename: "Pick",
  id: string,
  description: string,
  market?: Market | null,
  file: S3Object,
  price: number,
  shipped: boolean,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type UpdateMarketInput = {
  id: string,
  name?: string | null,
  tags?: Array< string | null > | null,
  owner?: string | null,
  createdAt?: string | null,
};

export type DeleteMarketInput = {
  id: string,
};

export type CreatePickInput = {
  id?: string | null,
  description: string,
  file: S3ObjectInput,
  price: number,
  shipped: boolean,
  owner?: string | null,
  createdAt?: string | null,
  pickMarketId?: string | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelPickConditionInput = {
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  shipped?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPickConditionInput | null > | null,
  or?: Array< ModelPickConditionInput | null > | null,
  not?: ModelPickConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePickInput = {
  id: string,
  description?: string | null,
  file?: S3ObjectInput | null,
  price?: number | null,
  shipped?: boolean | null,
  owner?: string | null,
  createdAt?: string | null,
  pickMarketId?: string | null,
};

export type DeletePickInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  registered?: boolean | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  registered?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  registered?: boolean | null,
  orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  pick?: Pick | null,
  user?: User | null,
  shippingAddress?: ShippingAddress | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type ShippingAddress = {
  __typename: "ShippingAddress",
  city: string,
  country: string,
  address_line1: string,
  address_state: string,
  address_zip: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  registered?: boolean | null,
};

export type CreateOrderInput = {
  id?: string | null,
  shippingAddress?: ShippingAddressInput | null,
  createdAt?: string | null,
  orderPickId?: string | null,
  orderUserId?: string | null,
};

export type ShippingAddressInput = {
  city: string,
  country: string,
  address_line1: string,
  address_state: string,
  address_zip: string,
};

export type ModelOrderConditionInput = {
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
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

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items?:  Array<Task | null > | null,
  nextToken?: string | null,
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPrivateNoteFilterInput | null > | null,
  or?: Array< ModelPrivateNoteFilterInput | null > | null,
  not?: ModelPrivateNoteFilterInput | null,
};

export type ModelPrivateNoteConnection = {
  __typename: "ModelPrivateNoteConnection",
  items?:  Array<PrivateNote | null > | null,
  nextToken?: string | null,
};

export type ModelMarketFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMarketFilterInput | null > | null,
  or?: Array< ModelMarketFilterInput | null > | null,
  not?: ModelMarketFilterInput | null,
};

export type ModelMarketConnection = {
  __typename: "ModelMarketConnection",
  items?:  Array<Market | null > | null,
  nextToken?: string | null,
};

export type ModelPickFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  shipped?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPickFilterInput | null > | null,
  or?: Array< ModelPickFilterInput | null > | null,
  not?: ModelPickFilterInput | null,
};

export type SearchableMarketFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  tags?: SearchableStringFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableMarketFilterInput | null > | null,
  or?: Array< SearchableMarketFilterInput | null > | null,
  not?: SearchableMarketFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableMarketSortInput = {
  field?: SearchableMarketSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableMarketSortableFields {
  id = "id",
  name = "name",
  tags = "tags",
  owner = "owner",
  createdAt = "createdAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableMarketConnection = {
  __typename: "SearchableMarketConnection",
  items?:  Array<Market | null > | null,
  nextToken?: string | null,
  total?: number | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePrivateNoteMutationVariables = {
  input: CreatePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type CreatePrivateNoteMutation = {
  createPrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePrivateNoteMutationVariables = {
  input: UpdatePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type UpdatePrivateNoteMutation = {
  updatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePrivateNoteMutationVariables = {
  input: DeletePrivateNoteInput,
  condition?: ModelPrivateNoteConditionInput | null,
};

export type DeletePrivateNoteMutation = {
  deletePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateMarketMutationVariables = {
  input: CreateMarketInput,
  condition?: ModelMarketConditionInput | null,
};

export type CreateMarketMutation = {
  createMarket?:  {
    __typename: "Market",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelPickConnection",
      items?:  Array< {
        __typename: "Pick",
        id: string,
        description: string,
        price: number,
        shipped: boolean,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    owner: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateMarketMutationVariables = {
  input: UpdateMarketInput,
  condition?: ModelMarketConditionInput | null,
};

export type UpdateMarketMutation = {
  updateMarket?:  {
    __typename: "Market",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelPickConnection",
      items?:  Array< {
        __typename: "Pick",
        id: string,
        description: string,
        price: number,
        shipped: boolean,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    owner: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteMarketMutationVariables = {
  input: DeleteMarketInput,
  condition?: ModelMarketConditionInput | null,
};

export type DeleteMarketMutation = {
  deleteMarket?:  {
    __typename: "Market",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelPickConnection",
      items?:  Array< {
        __typename: "Pick",
        id: string,
        description: string,
        price: number,
        shipped: boolean,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    owner: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreatePickMutationVariables = {
  input: CreatePickInput,
  condition?: ModelPickConditionInput | null,
};

export type CreatePickMutation = {
  createPick?:  {
    __typename: "Pick",
    id: string,
    description: string,
    market?:  {
      __typename: "Market",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelPickConnection",
        nextToken?: string | null,
      } | null,
      tags?: Array< string | null > | null,
      owner: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    price: number,
    shipped: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePickMutationVariables = {
  input: UpdatePickInput,
  condition?: ModelPickConditionInput | null,
};

export type UpdatePickMutation = {
  updatePick?:  {
    __typename: "Pick",
    id: string,
    description: string,
    market?:  {
      __typename: "Market",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelPickConnection",
        nextToken?: string | null,
      } | null,
      tags?: Array< string | null > | null,
      owner: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    price: number,
    shipped: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePickMutationVariables = {
  input: DeletePickInput,
  condition?: ModelPickConditionInput | null,
};

export type DeletePickMutation = {
  deletePick?:  {
    __typename: "Pick",
    id: string,
    description: string,
    market?:  {
      __typename: "Market",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelPickConnection",
        nextToken?: string | null,
      } | null,
      tags?: Array< string | null > | null,
      owner: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    price: number,
    shipped: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type RegisterUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type RegisterUserMutation = {
  registerUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    registered?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateuserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateuserMutation = {
  updateuser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    registered?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    pick?:  {
      __typename: "Pick",
      id: string,
      description: string,
      market?:  {
        __typename: "Market",
        id: string,
        name: string,
        tags?: Array< string | null > | null,
        owner: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      file:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      },
      price: number,
      shipped: boolean,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      registered?: boolean | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    shippingAddress?:  {
      __typename: "ShippingAddress",
      city: string,
      country: string,
      address_line1: string,
      address_state: string,
      address_zip: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items?:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      description?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPrivateNoteQueryVariables = {
  id: string,
};

export type GetPrivateNoteQuery = {
  getPrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPrivateNotesQueryVariables = {
  filter?: ModelPrivateNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrivateNotesQuery = {
  listPrivateNotes?:  {
    __typename: "ModelPrivateNoteConnection",
    items?:  Array< {
      __typename: "PrivateNote",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMarketQueryVariables = {
  id: string,
};

export type GetMarketQuery = {
  getMarket?:  {
    __typename: "Market",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelPickConnection",
      items?:  Array< {
        __typename: "Pick",
        id: string,
        description: string,
        price: number,
        shipped: boolean,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    owner: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListMarketsQueryVariables = {
  filter?: ModelMarketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMarketsQuery = {
  listMarkets?:  {
    __typename: "ModelMarketConnection",
    items?:  Array< {
      __typename: "Market",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelPickConnection",
        nextToken?: string | null,
      } | null,
      tags?: Array< string | null > | null,
      owner: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPickQueryVariables = {
  id: string,
};

export type GetPickQuery = {
  getPick?:  {
    __typename: "Pick",
    id: string,
    description: string,
    market?:  {
      __typename: "Market",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelPickConnection",
        nextToken?: string | null,
      } | null,
      tags?: Array< string | null > | null,
      owner: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    price: number,
    shipped: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListPicksQueryVariables = {
  filter?: ModelPickFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPicksQuery = {
  listPicks?:  {
    __typename: "ModelPickConnection",
    items?:  Array< {
      __typename: "Pick",
      id: string,
      description: string,
      market?:  {
        __typename: "Market",
        id: string,
        name: string,
        tags?: Array< string | null > | null,
        owner: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      file:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      },
      price: number,
      shipped: boolean,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    registered?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SearchMarketsQueryVariables = {
  filter?: SearchableMarketFilterInput | null,
  sort?: SearchableMarketSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchMarketsQuery = {
  searchMarkets?:  {
    __typename: "SearchableMarketConnection",
    items?:  Array< {
      __typename: "Market",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelPickConnection",
        nextToken?: string | null,
      } | null,
      tags?: Array< string | null > | null,
      owner: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
  } | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePrivateNoteSubscriptionVariables = {
  owner: string,
};

export type OnCreatePrivateNoteSubscription = {
  onCreatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePrivateNoteSubscriptionVariables = {
  owner: string,
};

export type OnUpdatePrivateNoteSubscription = {
  onUpdatePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePrivateNoteSubscriptionVariables = {
  owner: string,
};

export type OnDeletePrivateNoteSubscription = {
  onDeletePrivateNote?:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateMarketSubscription = {
  onCreateMarket?:  {
    __typename: "Market",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelPickConnection",
      items?:  Array< {
        __typename: "Pick",
        id: string,
        description: string,
        price: number,
        shipped: boolean,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    owner: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMarketSubscription = {
  onUpdateMarket?:  {
    __typename: "Market",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelPickConnection",
      items?:  Array< {
        __typename: "Pick",
        id: string,
        description: string,
        price: number,
        shipped: boolean,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    owner: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMarketSubscription = {
  onDeleteMarket?:  {
    __typename: "Market",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelPickConnection",
      items?:  Array< {
        __typename: "Pick",
        id: string,
        description: string,
        price: number,
        shipped: boolean,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    owner: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePickSubscription = {
  onCreatePick?:  {
    __typename: "Pick",
    id: string,
    description: string,
    market?:  {
      __typename: "Market",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelPickConnection",
        nextToken?: string | null,
      } | null,
      tags?: Array< string | null > | null,
      owner: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    price: number,
    shipped: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePickSubscription = {
  onUpdatePick?:  {
    __typename: "Pick",
    id: string,
    description: string,
    market?:  {
      __typename: "Market",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelPickConnection",
        nextToken?: string | null,
      } | null,
      tags?: Array< string | null > | null,
      owner: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    price: number,
    shipped: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePickSubscription = {
  onDeletePick?:  {
    __typename: "Pick",
    id: string,
    description: string,
    market?:  {
      __typename: "Market",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelPickConnection",
        nextToken?: string | null,
      } | null,
      tags?: Array< string | null > | null,
      owner: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    price: number,
    shipped: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};
