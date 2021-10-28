/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSports = /* GraphQL */ `
  mutation CreateSports(
    $input: CreateSportsInput!
    $condition: ModelSportsConditionInput
  ) {
    createSports(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const updateSports = /* GraphQL */ `
  mutation UpdateSports(
    $input: UpdateSportsInput!
    $condition: ModelSportsConditionInput
  ) {
    updateSports(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const deleteSports = /* GraphQL */ `
  mutation DeleteSports(
    $input: DeleteSportsInput!
    $condition: ModelSportsConditionInput
  ) {
    deleteSports(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const createLeagues = /* GraphQL */ `
  mutation CreateLeagues(
    $input: CreateLeaguesInput!
    $condition: ModelLeaguesConditionInput
  ) {
    createLeagues(input: $input, condition: $condition) {
      id
      title
      sport
      createdAt
      updatedAt
    }
  }
`;
export const updateLeagues = /* GraphQL */ `
  mutation UpdateLeagues(
    $input: UpdateLeaguesInput!
    $condition: ModelLeaguesConditionInput
  ) {
    updateLeagues(input: $input, condition: $condition) {
      id
      title
      sport
      createdAt
      updatedAt
    }
  }
`;
export const deleteLeagues = /* GraphQL */ `
  mutation DeleteLeagues(
    $input: DeleteLeaguesInput!
    $condition: ModelLeaguesConditionInput
  ) {
    deleteLeagues(input: $input, condition: $condition) {
      id
      title
      sport
      createdAt
      updatedAt
    }
  }
`;
export const createPick = /* GraphQL */ `
  mutation CreatePick(
    $input: CreatePickInput!
    $condition: ModelPickConditionInput
  ) {
    createPick(input: $input, condition: $condition) {
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
export const updatePick = /* GraphQL */ `
  mutation UpdatePick(
    $input: UpdatePickInput!
    $condition: ModelPickConditionInput
  ) {
    updatePick(input: $input, condition: $condition) {
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
export const deletePick = /* GraphQL */ `
  mutation DeletePick(
    $input: DeletePickInput!
    $condition: ModelPickConditionInput
  ) {
    deletePick(input: $input, condition: $condition) {
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
export const registerUser = /* GraphQL */ `
  mutation RegisterUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    registerUser(input: $input, condition: $condition) {
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
export const updateuser = /* GraphQL */ `
  mutation Updateuser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateuser(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      pick {
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
      user {
        id
        username
        email
        registered
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      shippingAddress {
        city
        country
        address_line1
        address_state
        address_zip
      }
      createdAt
      updatedAt
    }
  }
`;
