//inyeccion de dependecia (inversión de control)
const express = require('express');
const axios = require('axios');
const {get} = require('./33_handlers_inyeccion');
const app = express();
const port = 3000;

app.get('/', get(axios))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))