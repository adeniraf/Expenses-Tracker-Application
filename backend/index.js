const express = require('express')
const cors = require('cors')
const dbConnect = require('./db/db')
const transactionsRouter = require('./routes/transactions')

const app = express()
require('dotenv').config()

// middleware functions
app.use(express.json())
app.use(cors())

// Routing middleware
app.use('/transactions', transactionsRouter)

app.get('/', (req, res) => {
	res.send('Hello World!')
})

const PORT = process.env.PORT
app.listen(PORT, async () => {
	console.log(`Listening on PORT: ${PORT}`)

	try {
		dbConnect()
	} catch (error) {
		console.log(error)
	}
})
