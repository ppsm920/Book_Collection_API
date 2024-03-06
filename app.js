// Load required modules
const express = require('express')
const bodyParser = require('body-parser')
// for Cross-Origin Resources Sharing
const cors = require('cors')
// for environment variable management
const dotenv = require('dotenv')
const bookRoutes = require('./routes/booksRoutes')

// Initialize environment variables from .env file
dotenv.config()
const app = express()

// Configure Express app with necessary middleware
// to enable all CORS requirements
app.use(cors())
// to parse JSON bodies in requests
app.use(bodyParser.json())
// to handle requests with bookRoutes
app.use('/', bookRoutes)

// Determine the port for the server to listen on
const port = process.env.PORT || 3000

// Start the Express server on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
