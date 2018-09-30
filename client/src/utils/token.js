export function setToken (token) {
    localStorage.setItem('_KAI_JWT', token)
}

export function getToken () {
    return localStorage.getItem('_KAI_JWT')
}
