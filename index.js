const express = require('express');
const session = require('express-session')
const app = express();

app.use(session({ 
  secret: 'hichon', 
  resave: false, 
  saveUninitialized: true
 })
)

const PORT = 4000;

app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});

app.get('/', (req, res) => { 
    console.log('Hello World')
    res.send('Sleepy together');
})

app.post('/cart', (req, res) => {
    console.log('add to cart ')
    req.session.cookie.secure = true;
    req.session.cart = 'product'
    // res.session = [
    //     {
    //         name: 'fan',
    //         price: 500
    //     }
    // ]
})

app.get('/cart', (req, res) => {
    console.log('get cart')
    res.json(req.locals);
}) 

app.listen(PORT, () => {
     console.log('server start')
})