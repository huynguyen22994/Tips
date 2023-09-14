const http = require('http')
const { createProxyMiddleware } = require('http-proxy-middleware')

const servers = [
    { url: 'http://localhost:3001' },
    { url: 'http://localhost:3002' },
    { url: 'http://localhost:3003' }
]

// Create proxy middleware
const proxy = createProxyMiddleware({
    target: servers,
    changeOrigin: true,
    xfwd: true,
    router: (req) => {
        // Selecte api backend server based on simple round-robin algorithm
        const server = servers.shift()
        servers.push(server)
        return server.url
    }
})

// Create load balancer server
const server = http.createServer((req, res, next) => {
    proxy(req, res, next)
})

const port = 8000;
server.listen(port, () => {
    console.log(`Load balancing server run on port ${ port }`)
})