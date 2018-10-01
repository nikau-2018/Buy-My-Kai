const localStorage = global.window.localStorage
const TOKEN = '_KAI_JWT'

export function setToken (token) {
  if (token) {
    localStorage.setItem(TOKEN, token)
  } else {
    localStorage.removeItem(TOKEN)
  }
}

export function getToken () {
  return localStorage.getItem(TOKEN)
}
