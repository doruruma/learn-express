// dotenv
require('dotenv').config()

// express
const express = require('express')
const app = express()

// routes
const workoutRoutes = require('./routes/workouts')

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.info(req.path, req.method)
  next()
})

// welcome routes
app.get('/', (req, res) => {
  res.json({
    title: 'Express API',
    message: 'Hello world'
  })
})

// api routes
app.use('/api/workouts', workoutRoutes)

// listening
app.listen(process.env.APP_PORT, (req, res) => {
  console.info(`server started at port ${process.env.APP_PORT}`)
})