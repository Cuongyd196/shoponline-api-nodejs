const express = require('express');
var app = express();
var bodyParser = require('body-parser')
var { db_connect } = require ('./app/config/db.config');

// connect db 
db_connect();

const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var accountRouter= require('./app/routers/account.router')
app.use('/api/account/', accountRouter)

var danhmuctRouter= require('./app/routers/danhmuc')
app.use('/api/danhmuc/', danhmuctRouter)

var sanphamRouter= require('./app/routers/sanpham')
app.use('/api/sanpham/', sanphamRouter)

app.get('/', (req, res, next) => {
    res.json('HOME') 
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})