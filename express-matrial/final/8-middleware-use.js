import express from 'express';
import logger from './logger.js'
import authorize from './authorize.js';
import morgan from 'morgan';



const app = express()
// req => middleware => res
// thrid party middleware
// app.use(express.static('./public'))
//

// app.use('/api',logger)
// app.use('/api',authorize)

// app.use([logger, authorize])

app.use(morgan('tiny'))
app.get('/', (req, res) => {

  res.send('home page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/api/products', (req, res) => {
    res.send('products page')
}
)

app.get('/api/items', (req, res) => {
    res.send('items page')
}
)

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})