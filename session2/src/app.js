const express = require('express')

require('./db/mongoose')
const userRoutes = require('./routs/users')
const book = require('./routs/books')
const app = express()
const port = process.env.PORT || 3000
app.use (express.json())
app.use(userRoutes)
app.use(book)
app.listen(port)



