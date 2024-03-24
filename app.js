const http= require('http');

const  express = require('express')
const app = express()
const port = 3000

app.use((req,res,next) =>{
    console.log('Middleware 1')
    next();
})

app.use((req,res,next) =>{
    console.log(' Middleware 2')
    res.send('<h1>Hello From Express</h1>')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))