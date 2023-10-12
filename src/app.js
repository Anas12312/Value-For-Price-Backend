const express = require('express')
const offersRouter = require('./Routes/offers')
const restaurantsRouter = require('./Routes/restaurants')
const tagsRouter = require('./Routes/tags')
const stepsRouter = require('./Routes/steps')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.use(offersRouter)
app.use(restaurantsRouter)
app.use(tagsRouter)
app.use(stepsRouter)

app.listen(port, ()=>{
    console.log(`Server Running on Port: ${port}`)
})