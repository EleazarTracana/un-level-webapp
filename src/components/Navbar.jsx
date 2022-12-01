import { useState } from 'react'

import { HiMenu, HiX } from 'react-icons/hi'
import logo from './../assets/un-level-logo.png'

const Navbar = () => {
	const navLinks = [
		{
			id: '#overview',
			title: 'Overview',
		},
		{
			id: '#team',
			title: 'Team',
		},
		{
			id: '#about-us',
			title: 'About Us',
		},
		{
			id: 'https://docs.un-level.com/',
			title: 'Whitepaper',
			targetBlank: true,
		},
		{
			id: '#roadmap',
			title: 'Roadmap',
		},
	]

	const [toggle, setToggle] = useState(false)

	return (
		<section
			about='menu'
			className='w-full h-16 grid grid-flow-col items-center justify-between bg-white text-black leading-none shadow px-6 translate-x-0 z-10'>
			<img
				src={logo}
				alt='Logo'
				className='h-full w-auto overflow-hidden'
			/>
			<div className='relative h-full w-auto sm:hidden grid place-items-center'>
				<button
					className='text-4xl'
					onClick={() => {
						setToggle(!toggle)
					}}>
					{!toggle && <HiMenu />}
					{toggle && <HiX />}
				</button>
				{toggle && (
					<div className='absolute right-0 top-full mt-3 h-auto bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-neutral-300 grid items-center grid-flow-row text-left w-max p-6 rounded-2xl font-medium'>
						{navLinks.map((navLink) => {
							return (
								<>
									<a
										href={navLink.id}
										target={
											navLink.targetBlank === true
												? '_blank'
												: '_parent'
										}
										rel={
											navLink.targetBlank === true
												? 'noopener noreferrer'
												: ''
										}
										className='p-3 grid w-auto h-auto text-left'>
										{navLink.title}
									</a>
								</>
							)
						})}
					</div>
				)}
			</div>
			<div className='h-full w-auto hidden sm:grid grid-flow-col items-center justify-end'></div>
		</section>
	)
}

export default Navbar
