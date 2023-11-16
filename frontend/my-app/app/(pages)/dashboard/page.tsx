'use client'
import ExpenditureChart from '@/components/ExpenditureChart'
import RecentExpenses from '@/components/RecentTransactions'
import SummaryGraph from '@/components/SummaryGraph'
import React, { useEffect, useState } from 'react'

const Page = () => {
	const [incomeData, setIncomeData] = useState()
	const [expenseData, setExpenseData] = useState()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const expensesdata = await fetch('/api')
				const res = await expensesdata.json()
				setExpenseData(res)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

	console.log(expenseData)

	return (
		<div className='hidden md:flex md:flex-wrap bg-mydarkgrey w-full h-full px-12 py-12 rounded-2xl'>
			<SummaryGraph />
			<ExpenditureChart />
			<RecentExpenses />
			<SummaryGraph />
		</div>
	)
}

export default Page
