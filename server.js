const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const productRoute = require('./routes/product');
const path = require('path');

// express init 
const app = express();

// environemnt 
const PORT = process.env.PORT || 5000;

// express middlewares
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));

// static 
app.use(express.static(path.join(__dirname, 'public')));

// routing 
app.use('/api/v1/product', productRoute);


// listen 
app.listen(PORT, () => {
    console.log(`server is running on port ${ PORT }`.bgMagenta.black);
});