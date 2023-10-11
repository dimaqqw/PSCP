const http = require("http");
const fs = require("fs");
const url = require('url');
const port = 5002;

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

http.createServer(function(req, res) {
    console.log(req.url);

    let path = url.parse(req.url, true);

    switch (path.pathname) {
        case '/fact':
        const k = +path.query.k;

        if (Number.isInteger(k) && k >= 0) {
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            setImmediate(() => {
                res.end(JSON.stringify({k: k, fact: factorial(k)}));
            });
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end("Неверный параметр K");
        }
        break;
        case '/':
        fs.readFile('03-03.html', 'utf-8', function(err, data) {
            if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end("Ошибка сервера");
            } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
            }
        });
        break;
        default:
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end("Страница не найдена");
    }

}).listen(port, () => {console.log(`Server running at\nhttp://localhost:${port}/fact?k=3`)})