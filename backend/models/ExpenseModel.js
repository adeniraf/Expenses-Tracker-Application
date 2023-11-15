const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
			maxLength: 20,
		},
		amount: {
			type: Number,
			required: true,
			trim: true,
			maxLength: 20,
			min: 0,
		},
		date: {
			type: Date,
			required: true,
		},
		category: {
			type: String,
			required: true,
			maxLength: 20,
		},
		description: {
			type: String,
			required: true,
			trim: true,
			maxLength: 50,
		},
		type: {
			type: String,
			default: 'expense',
		},
	},
	{ timestamps: true }
)

const Expense = mongoose.model('Expense', ExpenseSchema)

module.exports = Expense
