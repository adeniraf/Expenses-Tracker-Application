'use client'
import React, { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'

const Topbar = () => {
	const [navOpen, setNavOpen] = useState(false)

	const toggleNav = () => {
		setNavOpen((prev) => !prev)
	}
	console.log(navOpen)
	return (
		<div className='flex md:hidden justify-between items-center mb-4 w-full max-h-20 bg-myblack p-4 rounded-2xl sticky top-0 left-0'>
			IMG <FaHamburger onClick={toggleNav} />
		</div>
	)
}

export default Topbar
