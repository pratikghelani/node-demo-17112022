const express = require('express');
require('dotenv').config();
const router = require('./routes/index');
const app = express();

const db_URL = 'mongodb+srv://demo:demo@cluster0.b4yhzpm.mongodb.net/?retryWrites=true&w=majority';
const path = require('path');
app.use('/upload', express.static(path.join('upload')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', router);
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Test')
})

mongoose.connect(db_URL, {useNewUrlParser: true}).then(() => {
  console.log('Database connected', db_URL);
  app.listen(process.env.PORT || 5100, async () => {
    console.log(`server is running on port : ${process.env.PORT || 5100}`);
  });
});


