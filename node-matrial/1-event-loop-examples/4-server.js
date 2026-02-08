import { createServer } from 'http'
const server=createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
        console.log('Home page was visited');
    }
    else if(req.url==='/about'){
        res.end('Here is our short history')
        console.log('About page was visited');

    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
        `)
        console.log('Error page was visited');
    }
})
server.listen(5000,()=>{
    console.log('Server is listening on port 5000');
})
