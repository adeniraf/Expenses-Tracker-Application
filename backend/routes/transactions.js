const express = require('express')
const router = express.Router()
const {
	addIncome,
	getIncome,
	deleteIncome,
	updateIncome,
} = require('../controllers/incomeController')

const {
	addExpense,
	getExpense,
	deleteExpense,
	updateExpense,
} = require('../controllers/expensesController')

router
	// GET
	.get('/get-incomes', getIncome)
	.get('/get-expenses', getExpense)

	// POST
	.post('/add-income', addIncome)
	.post('/add-expense', addExpense)

	// DELETE
	.delete('/delete-income/:id', deleteIncome)
	.delete('/delete-expense/:id', deleteExpense)

	// UPDATE
	.put('/update-income/:id', updateIncome)
	.put('/update-expense/:id', updateExpense)

module.exports = router
