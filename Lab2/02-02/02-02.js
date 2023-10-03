const http = require('http')
const fs = require('fs')
const port = 5000

http.createServer((request,response)=>{
    response.setHeader("Content-Type", "image/png; charset=utf-8")
    console.log(request.url);
    if (request.url == '/pic') {
        fs.access("pic.png", fs.constants.R_OK, err => {
            if (err) {
                console.log(err);
            }
            else{
                fs.createReadStream('pic.png').pipe(response)
            }
        })
    }
    else{
        fs.access(request.url.substring(1), fs.constants.R_OK, err => {
            if(err){
                response.statusCode = 404;
                response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
                response.end("Ресурс не найден.")
            }
            else{
                fs.createReadStream(filePath).pipe(response);
            }
        });
    }
}).listen(port, ()=>{console.log(`http://localhost:${port}/pic`);})