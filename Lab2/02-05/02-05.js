const http = require('http');
const fs = require('fs')
const port = 5000

http.createServer((req,res) => {
    if (req.url === '/fetch') {
        fs.readFile('fetch.html', (err,data)=>{
            if (err) {
                console.log(err);
                res.end(`Ошибка: ${err}`)
            }
            else{
                res.writeHead(200, {'Content-Type': "text/html; charset=utf-8"})
                res.end(data)
            }
        })
    }
    else if(req.url === '/api/name'){
        res.writeHead(200, {'Content-Type': "text/html; charset=utf-8"})
        res.end('Денисенко Дмитрий Дмитриевич')
    }
    else{
        res.writeHead(404, {'Content-Type': "text/plain; charset=utf-8"})
        res.end(`Ошибка`)
    }
}).listen(port, ()=>{console.log(`http://localhost:${port}/fetch`);})