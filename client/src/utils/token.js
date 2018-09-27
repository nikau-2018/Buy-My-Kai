export function setToken (token) {
    localStorage.setItem('_THE_VA_JWT', token)
}

export function getToken () {
    return localStorage.getItem('_THE_VA_JWT')
}
