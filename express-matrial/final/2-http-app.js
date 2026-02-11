import express from 'express'
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

// catch-all 404 handler
app.use((req, res) => {
    res.status(404).send(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `);
});


app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})