import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { HiExternalLink, HiMenu, HiX } from 'react-icons/hi'
import useMediaQuery from '../hooks/useMediaQuery'
import { ReactComponent as Logo } from './../assets/logo.svg'

let lastKnownScrollPosition = 0
let lastScrollDirection = 'down'

const Navbar = () => {
	const navLinks = [
		{
			id: '#top',
			title: 'Overview',
		},
		{
			id: '#about',
			title: 'About',
		},
		{
			id: '#roadmap',
			title: 'Roadmap',
		},
		{
			id: '#team',
			title: 'Team',
		},
		{
			id: 'https://docs.un-level.com/',
			title: 'Whitepaper',
			targetBlank: true,
		},
		{
			id: "#social",
			title: 'Join us',
		}
	]

	const isDesktop = useMediaQuery('(min-width: 768px)')

	const [toggle, setToggle] = useState(false)

	const refMenu = useRef<HTMLDivElement>(null)

	useEffect(() => {
		/**
		 *
		 * @param {MouseEvent} e
		 */
		function handleClick(e: MouseEvent) {
			if (!e || !e.target) return
			const target = e.target as Element
			if (target.id === 'menu-toggler') return

			const menu: HTMLDivElement = refMenu && refMenu.current!
			if (menu.contains(target)) return
			setToggle(false)
		}

		if (toggle) {
			window.addEventListener('click', handleClick)
		}

		return () => {
			if (toggle) {
				window.removeEventListener('click', handleClick)
			}
		}
	}, [toggle])

	const [showNavbar, setShowNavbar] = useState(true)
	const [navbarBig, setNavbarBig] = useState(true)

	function showNavbarHandler(scrollPos: number) {
		if (lastScrollDirection === 'up') {
			setShowNavbar(true)
		}
		if (
			lastScrollDirection === 'down' &&
			scrollPos > window.innerHeight / 4
		) {
			setShowNavbar(false)
		}
		if (scrollPos >= 64) {
			setNavbarBig(false)
		} else {
			setNavbarBig(true)
		}
	}

	useEffect(() => {
		let target = window.location.href.slice(window.location.href.indexOf('#'));
		try {
			if (document.querySelector(target)) document.querySelector(target)?.scrollIntoView();
		} catch (error) {
		}

		const scrollHandler = (e: Event) => {
			if (window.scrollY > lastKnownScrollPosition)
				lastScrollDirection = 'down'
			if (window.scrollY < lastKnownScrollPosition)
				lastScrollDirection = 'up'
			lastKnownScrollPosition = window.scrollY

			showNavbarHandler(lastKnownScrollPosition)
		}
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}

	}, [])

	const moveHandle = (target: string, isBlank: Boolean) => {
		if (isBlank) window.open(target, isBlank ? "_black" : "_target");
		else {
			if (window.location.pathname != '/') {
				window.location.href = '/' + target;
			} else {
				document.querySelector(target)?.scrollIntoView();
			}
		}
	}

	return (
		<>
			<div
				className={
					' bg-white transition-all' +
					`${navbarBig && isDesktop ? ' h-24' : ' h-16'}`
				}></div>
			<section
				about='menu'
				id='top'
				className={
					'fixed left-0 right-0 top-0 z-10 h-auto w-full translate-x-0 bg-white px-6 leading-none text-black shadow transition-all' +
					`${showNavbar
						? ' translate-y-0'
						: toggle
							? ' '
							: ' -translate-y-full'
					}`
				}>
				{/* <img
				src={logo}
				alt='Logo'
				className='h-full w-auto overflow-hidden'
			/> */}
				<div
					className={
						'container mx-auto grid w-full grid-flow-col items-center justify-between transition-all' +
						`${navbarBig && isDesktop ? ' h-24' : ' h-16'}`
					}>
					<span
						onClick={() => moveHandle('#top', false)}
						// href='#top'
						className='cursor-pointer block h-full w-auto overflow-hidden'>
						<Logo className='h-full w-auto overflow-hidden' />
					</span>
					{!isDesktop && (
						<div className='relative grid h-full w-auto place-items-center'>
							<button
								id='menu-toggler'
								className='text-4xl'
								onClick={() => {
									setToggle(!toggle)
								}}>
								{!toggle && (
									<HiMenu className='pointer-events-none' />
								)}
								{toggle && (
									<HiX className='pointer-events-none' />
								)}
							</button>
							{toggle && (
								<div
									ref={refMenu}
									className='absolute right-0 top-full mt-3 grid h-auto w-max grid-flow-row items-center rounded-2xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-6 text-left font-medium text-neutral-300'>
									{navLinks.map((navLink) => {
										return (
											<span
												onClick={() => {
													setToggle(false);
													moveHandle(navLink.id, navLink.targetBlank === true);
												}}
												key={navLink.id}
												// href={navLink.id}
												// target={
												// 	navLink.targetBlank === true
												// 		? '_blank'
												// 		: '_parent'
												// }
												// rel={
												// 	navLink.targetBlank === true
												// 		? 'noopener noreferrer'
												// 		: ''
												// }
												className='cursor-pointer grid h-auto w-auto grid-flow-col items-center gap-1 p-3 text-left'>
												{navLink.title}
												{navLink.targetBlank ===
													true && <HiExternalLink />}
											</span>
										)
									})}
									<NavLink className="cursor-pointer grid h-auto w-auto grid-flow-col items-center gap-1 p-3 text-left" to='/about'>About</NavLink>
								</div>
							)}
						</div>
					)}
					{isDesktop && (
						<div className='grid h-full w-auto grid-flow-col items-center justify-end'>
							{navLinks.map((navLink) => {
								return (
									<span
										onClick={() => {
											setToggle(false);
											moveHandle(navLink.id, navLink.targetBlank === true);
										}}
										key={navLink.id}
										// href={navLink.id}
										// target={
										// 	navLink.targetBlank === true
										// 		? '_blank'
										// 		: '_parent'
										// }
										// rel={
										// 	navLink.targetBlank === true
										// 		? 'noopener noreferrer'
										// 		: ''
										// }
										className='cursor-pointer group grid h-auto w-auto place-items-center py-3 px-2 text-center'>
										<div className='relative col-start-1 row-start-1 grid h-full w-full translate-x-0'>
											<div className='absolute -bottom-3 left-0 right-0 h-1 scale-x-0 rounded-full bg-gradient-to-br from-site-primary-600 to-site-secondary-600 transition-all group-hover:scale-x-100'></div>
										</div>
										<div className='col-start-1 row-start-1 grid translate-x-0 grid-flow-col items-center gap-1'>
											{navLink.title}
											{navLink.targetBlank === true && (
												<HiExternalLink />
											)}
										</div>
									</span>
								)
							})}
							<NavLink className="cursor-pointer group grid h-auto w-auto place-items-center py-3 px-2 text-center" to='/about'>About</NavLink>
						</div>
					)}
				</div>
			</section>
		</>
	)
}

export default Navbar
