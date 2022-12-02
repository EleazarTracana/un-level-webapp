export default function Roadmap() {
	const data = [
		{
			date: 'Q4 2022',
			title: 'Spreading Un-Level vision',
			content: (
				<p>
					"With great power comes great responsibility". As we develop
					the Un-Level DApp, we will also working on our Ambassadors
					Program. A program mainly focused on spreading our vision
					and values through top level influencers.
				</p>
			),
		},
		{
			date: 'Q1 2023',
			title: 'Grow as we go',
			content: (
				<p>
					We will adding to the board strategic partners that will
					help us along the way and provides us with real utilities to
					our NFT holders.
				</p>
			),
		},
		{
			date: 'Q1 2023',
			title: 'Public Sale',
			content: (
				<p>
					Minting goes live on ETH over a smart contract fully audited
					by third parties such as Hacken.
				</p>
			),
		},
		{
			date: 'Q2 2023',
			title: 'MVP Un-Level DApp',
			content: (
				<p>
					On the second quarter of 2023 we will be releasing our first
					version of Un-Level DApp, providing key features to our
					community.
				</p>
			),
		},
		{
			date: 'Q3/Q4 2023',
			title: 'Metaverse',
			content: (
				<p>
					A Metaverse building available to only NFT Holders, hosting
					meetups and coaching sessions to create the Synergy of a
					high value community
				</p>
			),
		},
	]

	return (
		<section
			about='roadmap'
			id='roadmap'
			className='container mx-auto px-6 py-12 lg:py-24'>
			<h3 className='w-full text-left text-4xl font-semibold leading-normal lg:text-center'>
				Roadmap
			</h3>
			<div className='grid grid-flow-row gap-6 py-12'>
				{data.map((road, index) => {
					const contentPositionLeft = index % 2 === 0 ? true : false
					return (
						<div
							key={index + road.title}
							className='grid grid-flow-row gap-3'>
							<div className='grid grid-cols-[auto_1fr] place-content-center place-items-center sm:grid-cols-[1fr_auto_1fr]'>
								<div className=' row-span-2 grid h-8 w-8 place-items-center sm:col-start-2 sm:row-span-1'>
									<div className='h-3 w-3 rounded-full bg-white/50'></div>
								</div>
								<p
									className={
										'w-full place-self-center py-2 text-xl font-semibold tracking-wide' +
										`${
											contentPositionLeft
												? ' sm:col-start-3'
												: ' sm:col-start-1 sm:row-start-1 sm:text-end'
										}`
									}>
									{road.title}
								</p>
								<p
									className={
										'col-start-2 row-start-1 w-full place-self-center font-mono text-xs font-semibold tracking-widest opacity-75 sm:row-start-1' +
										`${
											contentPositionLeft
												? ' sm:col-start-1 sm:text-end'
												: ' sm:col-start-3'
										}`
									}>
									{road.date}
								</p>
							</div>
							<div className='grid grid-cols-[auto_1fr] place-items-center sm:grid-cols-[1fr_auto_1fr]'>
								<div className=' grid h-full w-8 place-items-center sm:col-start-2'>
									<div className='h-full w-1 rounded-full bg-white/50'></div>
								</div>
								<div
									className={
										'w-full sm:row-start-1' +
										`${
											contentPositionLeft
												? ' sm:col-start-1 grid justify-end items-center'
												: ' sm:col-start-3'
										}`
									}>
									<div className='max-w-xl rounded-xl bg-gradient-to-br from-site-primary-800 to-site-secondary-900 p-4 lg:text-lg'>
										{road.content}
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
