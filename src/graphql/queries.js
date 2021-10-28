/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSports = /* GraphQL */ `
  query GetSports($id: ID!) {
    getSports(id: $id) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const listSports = /* GraphQL */ `
  query ListSports(
    $filter: ModelSportsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLeagues = /* GraphQL */ `
  query GetLeagues($id: ID!) {
    getLeagues(id: $id) {
      id
      title
      sport
      createdAt
      updatedAt
    }
  }
`;
export const listLeagues = /* GraphQL */ `
  query ListLeagues(
    $filter: ModelLeaguesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        sport
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPick = /* GraphQL */ `
  query GetPick($id: ID!) {
    getPick(id: $id) {
      id
      deporte
      liga
      evento
      mercado
      mercadoBook
      esFreePick
      description
      unidades
      result
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listPicks = /* GraphQL */ `
  query ListPicks(
    $filter: ModelPickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deporte
        liga
        evento
        mercado
        mercadoBook
        esFreePick
        description
        unidades
        result
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      registered
      orders {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
