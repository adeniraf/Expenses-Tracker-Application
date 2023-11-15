'use client'
import ExpenditureChart from '@/app/components/ExpenditureChart'
import SummaryGraph from '@/app/components/SummaryGraph'
import React, { useEffect } from 'react'
import axios from 'axios'

const Page = () => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				'http://localhost:5000/transactions/get-expenses'
			)
			console.log(res.data)
		}
		fetchData()
	}, [])
	return (
		<div className='bg-mydarkgrey w-full h-full px-8 py-8 rounded-2xl'>
			<div className='h-1/2 flex flex-1 justify-between'>
				<div className='w-full h-full flex flex-1'>
					<SummaryGraph />
				</div>{' '}
				<div className='w-full h-full flex flex-1'>
					<ExpenditureChart />
				</div>
			</div>
			<div className='h-1/2 flex-1'></div>
		</div>
	)
}

export default Page
