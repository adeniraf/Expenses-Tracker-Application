const { config } = require('dotenv')
const IncomeModel = require('../models/IncomeModel')

const getIncome = async (req, res) => {
	try {
		const incomeData = await IncomeModel.find({}).sort({ createdAt: -1 })
		res.status(200).json(incomeData)
	} catch (error) {
		console.log(error)
	}
}

const addIncome = async (req, res) => {
	const { title, amount, date, category, description } = req.body

	const income = new IncomeModel({
		title,
		amount,
		date,
		category,
		description,
	})

	try {
		// validations
		if (!title || !category || !description || !date) {
			return res.status(400).json({ message: 'All fields are required!' })
		}

		if (amount <= 0 || !amount === 'number') {
			return res
				.status(400)
				.json({ message: 'Amount must be a positive number' })
		}

		await income.save()
		res.status(200).json({ message: 'Income added successfuly' })
		console.log('Save successful')
	} catch (error) {
		res.status(500).json({ message: 'Server Error' })
	}

	console.log(req.body)
}

const deleteIncome = async (req, res) => {
	const { id } = req.params
	console.log(id)
	try {
		await IncomeModel.findByIdAndDelete(id)
		res.status(200).json({ message: 'Income Deleted.' })
	} catch (error) {
		res.status(500).json({ message: 'Server error.' })
	}
}

const updateIncome = async (req, res) => {}

module.exports = {
	getIncome,
	addIncome,
	deleteIncome,
	updateIncome,
}
