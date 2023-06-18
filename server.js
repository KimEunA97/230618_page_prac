
const fs = require('fs')
const express = require('express');
const app = express();


app.get('/', (req, res) => {

  res.render('index.html', { title: 'singup' })
})

app.post('/signup', (req, res) => {

  const { username, email, password } = req.body;


  res.send('회원가입 완료');

})



app.listen(2080, () => {

  console.log('server on at port 3000');

})