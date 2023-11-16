'use client'
import React, { useState } from 'react'
import { MdLogin, MdPieChart } from 'react-icons/md'
import { FaChartPie, FaHamburger } from 'react-icons/fa'
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
		<div className='hidden md:flex md:flex-col h-full  justify-between items-center text-center px-4 py-8 bg-mydarkgrey rounded-2xl'>
			{/* Nav Links */}
			LOGO
			<ul className=''>
				{navLinks.map((item) => {
					return (
						<li
							key={item.href}
							className='mb-8'>
							<Link
								key={item.text}
								href={item.href}
								className={`${
									item.href === pathname ? 'text-mygreen' : ''
								} flex gap-4 items-center hover:text-mygreen`}>
								{item.logo}
								{item.text}
							</Link>
						</li>
					)
				})}
			</ul>
			{/* Logout Button */}
			<button
				className='flex items-center justify-center inverted-1 w-36 hover:opacity-80'
				type='submit'>
				<MdLogin
					size={20}
					className='text-mygreen '
				/>
				Sign out
			</button>
		</div>
	)
}

export default Sidebar
