require('dotenv').config()
const server = require('./server')

// Assume development mode (API hits over a proxy) unless PORT is set
const port = process.env.PORT || 3001

server.listen(port, () => {
  const upMessage = process.env.NODE_ENV === 'production'
    ? `Server listening on ${port} (and serving static files)`
    : `Server accepting API requests proxied to http://localhost:${port}`
  console.log(upMessage)
})
