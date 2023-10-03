const http = require('http')

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type': 'text/html'})
    response.end('<h1>HelloWorld</h1>')
}).listen(3000,()=>{console.log('Server running at http://localhost:3000/')})