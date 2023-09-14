const http = require('http')
const express = require('express')
const crypto = require('node:crypto')
const cors = require('cors')
const app     = express();
const path    = require("path");

const keySecret = '123'
const handleRequest = (req, res, next) => {
    const { url, method } = req
    // get the received HMAC from the request headers
    const hmacClient = req.headers['x-hmac-sign']
    let body = req.body
    // sha256 kỹ thuật mã hóa đối xứng có thể dùng cho HMAC
    const hmacServer = crypto.createHmac('sha256', keySecret).update(JSON.stringify(body)).digest('hex')
    console.log('HMAC Server:::::::', hmacServer)
    console.log('HMAC Client:::::::', hmacClient)
    if(hmacClient !== hmacServer) {
        // Nếu Hmac client và server khác nhau nghĩa là dữ liệu vận chuyển đã bị thay đổi => ko cho lấy dữ liệu từ server
        res.writeHead(403, { 'Content-Type': 'text/plain' })
        return res.end('invalid HMAC')
    }
    next()
}

app.use(cors())
app.use(express.json())

app.get('/' , function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/api', handleRequest, function(req, res) {
    res.json({
        key: 'Hello'
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})