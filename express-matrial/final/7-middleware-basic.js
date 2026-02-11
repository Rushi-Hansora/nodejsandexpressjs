import express from 'express';

const app = express()
// req => middleware => res

app.get('/', (req, res) => {
  res.send('home page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})