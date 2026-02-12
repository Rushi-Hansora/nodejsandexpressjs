import express from 'express';

const app = express()
// req => middleware => res
const logger = (req, res, next) => {
  const method=req.method
  const url=req.url
    const time=new Date().getFullYear()
    console.log(method, url, time)
    // res.send('logger')
    next()
}
app.use(logger)


app.get('/', (req, res) => {
  res.send('home page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})