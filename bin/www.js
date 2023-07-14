// 创建服务器
const http = require("http")

const serverHandler = require('../app')

const PROT = 3000

const server = http.createServer(serverHandler)

server.listen(PROT)