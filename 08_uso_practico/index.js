const express = require('express');
const services = require('./services');
const parser = require('body-parser');
const handlify = require('./handlers')
const usersHandler =handlify('users')
const postsHandler =handlify('posts')
const app = express();

app.use(parser.urlencoded({ extended: false })); //form-urlencoded
app.use(parser.json());//json

const port = 3000;


app.get('/', usersHandler(services).get) //inyeccion de dependencias
app.post('/', usersHandler(services).post)
app.put('/:id', usersHandler(services).put)
app.delete('/:id', usersHandler(services).delete)
app.get('/posts', postsHandler(services).get) //inyeccion de dependencias
app.post('/posts', postsHandler(services).post)
app.put('/posts/:id', postsHandler(services).put)
app.delete('/posts/:id', postsHandler(services).delete)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))	