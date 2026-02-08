import { createServer } from 'http';

// const server = createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to our home page");
//     } else if (req.url === "/about") {
//     res.end("Here is our short history");
//     } else {
//     res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for</p>
//         <a href="/">Back Home</a>
//         `);
//     }   
// });

// using event emitter approach to create server
const server=createServer()
// emits request event
server.on('request',(req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page') 
    }
    else if(req.url==='/about'){
        res.end('Here is our short history')
    }
    else{
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
        `)
    }
})

server.listen(5000);