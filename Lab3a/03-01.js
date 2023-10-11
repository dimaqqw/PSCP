const http = require('http')
const port = 5000

let state = "norm";

http.createServer((req,res)=>{
    if(state != null){
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"})
        res.end(state)
    }
    else{
        res.end("Error")
    }
}).listen(port, ()=>{
    console.log(`Server running at\nhttp://localhost:${port}`);
})

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
    let input = null
    const states = ['norm', 'stop', 'test', 'idle', 'exit']
    while((input = process.stdin.read()) !== null){
        let trimInput = input.trim();
        if(states.includes(trimInput)){
            console.log(`${state} -> ${trimInput}`);
            if (trimInput === 'exit') {
                process.exit(0)
            }
            else{
                state = trimInput
            }
        }
        else{
            console.log(`Invalid state:${trimInput}\n${state} -> ${state}`);
        }
    }
})
