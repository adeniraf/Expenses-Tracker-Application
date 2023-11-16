'use client'
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { FaFacebook } from 'react-icons/fa6'
import {
	MdOutlineVisibility,
	MdOutlineVisibilityOff,
	MdLogin,
} from 'react-icons/md'
import Link from 'next/link'

const LoginForm = () => {
	const [passwordVisibility, setPasswordVisibility] = useState(false)

	const toggleVisibility = () => {
		setPasswordVisibility((prev) => !prev)
	}

	console.log(passwordVisibility)

	return (
		<div className='flex items-center justify-center w-full h-full p-2 animate-fade '>
			<div className='flex flex-col items-center justify-center sm:w-[620px] h-full w-full p-2 '>
				<form className='flex flex-col items-center w-80 p-4'>
					{/* First Line with Logo */}
					<div className='flex items-center justify-start gap-4 w-full mb-6'>
						* LOGO HERE *
						<div>
							<h1>Welcome to ExpenSieve</h1>
							<p>Log in to sync your account</p>
						</div>
					</div>
					{/* Buttons div */}
					<div className='flex justify-center gap-4 pb-6 border-b border-b-myweirdgrey w-full'>
						<button className='flex flex-1'>
							<FaGoogle size={20} /> Google
						</button>
						<button className='flex flex-1'>
							<FaFacebook size={20} /> Facebook
						</button>
					</div>
					{/* Actual Form Input */}
					<div className='flex flex-col items-start justify-start mt-6 w-full'>
						{/* Email Div */}
						<div className='flex flex-col w-full mb-3'>
							<label htmlFor=''>Email</label>
							<input
								type='email'
								placeholder='Enter your email address...'
								className='border text-sm border-mylightgrey hover:border-mygreen hover:placeholder-mygreen focus:border-mygreen bg-transparent rounded-lg w-full leading-10 px-8 active:none outline-none '
							/>
						</div>

						{/* Password Div */}
						<div className='w-full mb-3'>
							<label
								htmlFor='password'
								className=''>
								Password
							</label>

							<div className='relative group w-full'>
								{passwordVisibility ? (
									<button
										className='z-30 w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer group-hover:text-mygreen text-mywhite'
										onClick={toggleVisibility}>
										<MdOutlineVisibility className='pointer-events-auto w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-8 cursor-pointer group-hover:text-mygreen text-mywhite' />
									</button>
								) : (
									<MdOutlineVisibilityOff
										size={20}
										className='pointer-events-auto absolute top-1/2 transform -translate-y-1/2 right-8 group-hover:text-mygreen text-mywhite'
									/>
								)}
								<input
									type='password'
									placeholder='Enter your password...'
									className='border text-sm border-mylightgrey group-hover:border-mygreen group-hover:placeholder-mygreen focus:border-mygreen bg-transparent rounded-lg w-full leading-10 px-8 active:none outline-none'
								/>
							</div>
						</div>
					</div>
					<p className='text-mylightgrey mb-6 cursor-pointer hover:text-myorange'>
						Forgot password?
					</p>
					<button
						className='inverted-1 w-full mb-6 hover:opacity-80 hover:scale-105'
						type='submit'>
						<Link
							href='/dashboard'
							className='flex items-center justify-between gap-4'>
							<MdLogin
								size={20}
								className='text-mygreen '
							/>
							Login
						</Link>
					</button>
				</form>
				<p className='text-xs text-center mb-6 text-myweirdgrey '>
					By clicking Continue with Google/Facebook above, you
					acknowledge that you have read and understood, and agreed to
					ExpenSieve&apos;s Terms and conditions and Privacy Policy.
				</p>
				<div className='flex gap-8 p-4 text-mylightgrey text-center'>
					<p className='text-xs'>Need help?</p>
					<p className='text-xs'>Privacy & Terms</p>
					<p className='text-xs'>© 2023 Expensier</p>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
