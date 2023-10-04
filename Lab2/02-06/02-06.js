const http = require('http');
const fs = require('fs')
const port = 5000

http.createServer((req,res) => {
    if (req.url === '/jquery') {
        fs.access("jquery.html", fs.constants.R_OK, err => {
            if (err) {
                console.log(err);
            }
            else{
                fs.createReadStream('jquery.html').pipe(res)
            }
        })
        // fs.readFile('jquery.html', (err,data)=>{
        //     if (err) {
        //         console.log(err);
        //         res.end(`Ошибка: ${err}`)
        //     }
        //     else{a
        //         res.writeHead(200, {'Content-Type': "text/html; charset=utf-8"})
        //         res.end(data)
        //     }
        // })
    }
    else if(req.url === '/api/name'){
        res.writeHead(200, {'Content-Type': "text/html; charset=utf-8"})
        res.end('Денисенко Дмитрий Дмитриевич')
    }
    else{
        res.writeHead(404, {'Content-Type': "text/plain; charset=utf-8"})
        res.end(`Ошибка`)
    }
}).listen(port, ()=>{console.log(`http://localhost:${port}/jquery`);})