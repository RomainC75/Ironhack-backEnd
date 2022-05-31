const express = require('express')
const app = express() 
const data = require('./data/data.json')
const booksRouter = require('./Routes/books')

app.use(express.json())

app.use('/books/',booksRouter)

require('./error/errorHandler')(app)
// app.use((error,req,res,next)=>{
//     //next('error next')
// })

app.get("*", (req, res) => {
    res.status(404).json({
        message: `Page not found : ${req.originalUrl}`
    })
})
module.exports = app