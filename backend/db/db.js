const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI

const dbConnect = async () => {
	try {
		mongoose.set('strictQuery', false)
		await mongoose.connect(MONGO_URI)
		console.log('DB Connected')
	} catch (error) {
		console.log(error)
	}
}

module.exports = dbConnect
