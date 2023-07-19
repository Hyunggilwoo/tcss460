// console.log("Hello World")

const http = require('http')

const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain'})
    response.end('Hello World')
})

const PORT = 3000
app.listen(PORT)
console.log(`Console running on port ${PORT}`)
