const http = require('http')
const port = 5000

http.createServer((request,response)=>{
    response.setHeader("Content-Type", "text/plain; charset=utf-8")
    console.log(request.url);
    if (request.url == '/api/name') {
        response.end("Денисенко Дмитрий Дмитриевич")
    }
    else{
        response.end("URL не для 02-03")
    }
}).listen(port, ()=>{console.log(`http://localhost:${port}/api/name`);})