const http = require('http')
const fs = require('fs')
const port = 5000

http.createServer((request,response)=>{
    response.setHeader("Content-Type", "text/html; charset=utf-8")
    console.log(request.url);
    if (request.url == '/html') {
        fs.access("index.html", fs.constants.R_OK, err => {
            if (err) {
                console.log(err);
            }
            else{
                fs.createReadStream('index.html').pipe(response)
            }
        })
    }
    else{
        fs.access(request.url.substring(1), fs.constants.R_OK, err => {
            if(err){
                response.statusCode = 404;
                response.end("Ресурс не найден.")
            }
            else{
                fs.createReadStream(filePath).pipe(response);
            }
        });
    }
}).listen(port, ()=>{console.log(`http://localhost:${port}/html`);})