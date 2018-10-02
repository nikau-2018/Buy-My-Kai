const localStorage = global.window.localStorage
const TOKEN = '_KAI_JWT'

export function setToken (token) {
  if (token) {
    localStorage.setItem(TOKEN, token)
  }
}

export function getToken () {
  return localStorage.getItem(TOKEN)
}
