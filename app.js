const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/posts', postsRoute);

mongoose.connect(process.env.DB_Connection,
{useNewUrlParser:true},
() => console.log('connected to DB!')   
);

app.get('/', (req, res) =>{
    res.send('We are on home!');
});

app.listen(3000);
