const ExpenseModel = require('../models/ExpenseModel')

const getExpense = async (req, res) => {
	try {
		const expenseData = await ExpenseModel.find({})

		if (!expenseData) {
			res.status(404).json({ message: 'No resources found' })
		}

		res.status(200).json(expenseData)
	} catch (error) {
		res.status(500).json({ message: error })
	}
}

const addExpense = async (req, res) => {
	try {
		// parse the request body and use object destructurng to make a new entry into the DB based on the model
		const { title, amount, date, category, description, type } = req.body

		// make new entry into DB
		const newEntry = new ExpenseModel({
			title,
			amount,
			date,
			category,
			description,
			type,
		})

		await newEntry.save()
		res.status(200).json({ message: 'New Expense saved successfully!' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error })
	}
}

const deleteExpense = async (req, res) => {
	try {
		const { id } = req.params
		await ExpenseModel.findOneAndDelete({ _id: id })
		res.status(200).json({ message: 'Expense deleted successfully!' })
	} catch (error) {
		res.status(500).jsom({ message: error })
	}
}

const updateExpense = async (req, res) => {
	try {
		const { id } = req.params
		const { title, amount, date, category, description, type } = req.body
		const updatedDoc = new ExpenseModel(
			{
				title,
				amount,
				date,
				category,
				description,
				type,
			},
			{ new: true }
		)
		await ExpenseModel.findByIdAndUpdate(id, updatedDoc)
		res.status(200).json({ message: 'Expense updated successfully' })
	} catch (error) {
		res.status(500).json({ message: error })
	}
}

module.exports = { getExpense, addExpense, deleteExpense, updateExpense }
