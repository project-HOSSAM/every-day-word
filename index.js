const fs = require('fs');
const path = require('path')
const express = require('express');

const app = express()

const port = 3000;

app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res) => {
  let today = new Date();
  today = Math.ceil((today - new Date(today.getFullYear(),0,1)) / 86400000);
  const words = JSON.parse(fs.readFileSync('./words.json',{encoding:'utf8'}));
  res.render('index',{word : words[`${today}`]});
})

app.listen(port,() => {
  console.log(`app running on port ${port}`);
})