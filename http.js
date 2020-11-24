const http = require("http")
const server = http.createServer((request, response) => {
    response.write("hello World")
    response.end
})
server.listen(8181,function(){
    console.log(1)
})