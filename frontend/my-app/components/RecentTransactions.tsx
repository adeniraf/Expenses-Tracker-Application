import React from 'react'

const RecentTransactions = () => {
	const data = [
		{
			_id: '65526018189a589848dee7d6',
			title: 'Grocery Shopping',
			amount: 50.75,
			date: '2023-11-13T00:00:00.000Z',
			category: 'Food',
			description: 'Purchased fruits, vegetables, and dairy',
			type: 'Expense',
			createdAt: '2023-11-13T17:42:48.247Z',
			updatedAt: '2023-11-14T11:22:08.034Z',
			__v: 0,
		},
		{
			_id: '6553588884680d3ff248ddc2',
			title: 'Home Improvement',
			amount: 150,
			date: '2023-11-19T00:00:00.000Z',
			category: 'Home',
			description: 'Purchased paint and tools for a DIY project',
			type: 'Expense',
			createdAt: '2023-11-14T11:22:48.943Z',
			updatedAt: '2023-11-14T11:24:43.946Z',
			__v: 0,
		},
		{
			_id: '6553589484680d3ff248ddc4',
			title: 'Clothing Shopping',
			amount: 75.5,
			date: '2023-11-15T00:00:00.000Z',
			category: 'Clothing',
			description: 'Purchased shirts and jeans',
			type: 'Expense',
			createdAt: '2023-11-14T11:23:00.669Z',
			updatedAt: '2023-11-14T11:23:00.669Z',
			__v: 0,
		},
		{
			_id: '6553589c84680d3ff248ddc6',
			title: 'Gas Station',
			amount: 40.25,
			date: '2023-11-16T00:00:00.000Z',
			category: 'Transportation',
			description: "Filled up the car's gas tank",
			type: 'Expense',
			createdAt: '2023-11-14T11:23:08.495Z',
			updatedAt: '2023-11-14T11:23:08.495Z',
			__v: 0,
		},
		{
			_id: '655358a584680d3ff248ddc8',
			title: 'Utility Bill',
			amount: 90,
			date: '2023-11-18T00:00:00.000Z',
			category: 'Utilities',
			description: 'Paid the electricity bill for the month',
			type: 'Expense',
			createdAt: '2023-11-14T11:23:17.789Z',
			updatedAt: '2023-11-14T11:23:17.789Z',
			__v: 0,
		},
		{
			_id: '655358a984680d3ff248ddca',
			title: 'Bookstore',
			amount: 25.99,
			date: '2023-11-17T00:00:00.000Z',
			category: 'Books',
			description: 'Bought a new novel and a notebook',
			type: 'Expense',
			createdAt: '2023-11-14T11:23:21.710Z',
			updatedAt: '2023-11-14T11:23:21.710Z',
			__v: 0,
		},
	]

	return (
		<div className='w-1/2 h-1/2 bg-green-500 p-4'>
			<h1>RecentTransactions</h1>
			<div className='max-h-full p-2 overflow-y-scroll'>
				{/* Pass data down to this component and map */}
				<ul className='w-full'>
					{data.map((item) => {
						return (
							<li
								key={item._id}
								className='flex'>
								<div className='flex flex-3 mr-4'>LOGO</div>
								<div className='flex flex-1'>
									<div>Salary</div>
									<div></div>
								</div>
								<div className='flex flex-1'> +$2,500.00</div>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default RecentTransactions
