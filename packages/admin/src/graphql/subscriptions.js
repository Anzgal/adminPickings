/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String!) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String!) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String!) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSports = /* GraphQL */ `
  subscription OnCreateSports {
    onCreateSports {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSports = /* GraphQL */ `
  subscription OnUpdateSports {
    onUpdateSports {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSports = /* GraphQL */ `
  subscription OnDeleteSports {
    onDeleteSports {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLeagues = /* GraphQL */ `
  subscription OnCreateLeagues {
    onCreateLeagues {
      id
      title
      sport
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLeagues = /* GraphQL */ `
  subscription OnUpdateLeagues {
    onUpdateLeagues {
      id
      title
      sport
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLeagues = /* GraphQL */ `
  subscription OnDeleteLeagues {
    onDeleteLeagues {
      id
      title
      sport
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePick = /* GraphQL */ `
  subscription OnCreatePick {
    onCreatePick {
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
export const onUpdatePick = /* GraphQL */ `
  subscription OnUpdatePick {
    onUpdatePick {
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
export const onDeletePick = /* GraphQL */ `
  subscription OnDeletePick {
    onDeletePick {
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
