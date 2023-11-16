import React from 'react'
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from 'recharts'

const SummaryGraph = () => {
	const data = [
		{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
		{ name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
		{ name: 'Page C', uv: 150, pv: 2400, amt: 2400 },
	]

	return (
		<div className='w-1/2 h-1/2 bg-red-500 p-4'>
			Spending Summary
			<div className=''>
				<ResponsiveContainer
					width='90%'
					aspect={2.0}>
					<LineChart
						data={data}
						margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
						<XAxis dataKey='name' />
						<YAxis />
						<Line
							type='monotone'
							dataKey='uv'
							stroke='#8884d8'
						/>
						<CartesianGrid
							stroke='#ccc'
							strokeDasharray='5 5'
						/>
						<Legend />

						<Tooltip />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default SummaryGraph
