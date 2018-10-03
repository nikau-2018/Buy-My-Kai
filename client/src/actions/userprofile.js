export const SELECT_USER = 'SELECT_USER'

export const selectUser = id => {
  return {
    type: SELECT_USER,
    id
  }
}
