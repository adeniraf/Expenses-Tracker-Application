'use client'
import React from 'react'
import { MdLogin, MdPieChart } from 'react-icons/md'
import { FaChartPie } from 'react-icons/fa'
import { GrTransaction } from 'react-icons/gr'
import { IoIosWallet } from 'react-icons/io'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
	const navLinks = [
		{ text: 'Dashboard', href: '/dashboard', logo: <FaChartPie /> },
		{
			text: 'Transactions',
			href: '/transactions',
			logo: <GrTransaction />,
		},
		{ text: 'Income', href: '/income', logo: <FaChartPie /> },
		{ text: 'Expenses', href: '/expenses', logo: <FaChartPie /> },
		{ text: 'Portfolio', href: '/portfolio', logo: <IoIosWallet /> },
	]

	// Active Route styling
	const pathname = usePathname()
	console.log(pathname)

	return (
		<div className='flex flex-col justify-between items-center w-44 px-8 py-8 bg-mydarkgrey rounded-2xl mr-4 h-full'>
			{/* User Profile pic and name */}
			<div className='text-center'>
				Image
				<p>Hello, User</p>
			</div>

			{/* Nav Links */}
			<div className='flex flex-col gap-8 text-mywhite'>
				{navLinks.map((item) => {
					return (
						<Link
							key={item.text}
							href={item.href}
							className={`${
								item.href === pathname ? 'text-mygreen' : ''
							} flex gap-8 items-center`}>
							{item.logo}
							{item.text}
						</Link>
					)
				})}
			</div>

			{/* Logout Button */}
			<button
				className='flex items-center justify-center inverted-1 w-36 hover:opacity-80'
				type='submit'>
				<MdLogin
					size={20}
					className='text-mygreen '
				/>
				Login
			</button>
		</div>
	)
}

export default Sidebar
