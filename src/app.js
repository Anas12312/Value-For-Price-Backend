const express = require('express')
const offersRouter = require('./Routes/offers')
const restaurantsRouter = require('./Routes/restaurants')
const tagsRouter = require('./Routes/tags')
const stepsRouter = require('./Routes/steps')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json())

app.use(offersRouter)
app.use(restaurantsRouter)
app.use(tagsRouter)
app.use(stepsRouter)

app.listen(port, ()=>{
    console.log(`Server Running on Port: ${port}`)
})