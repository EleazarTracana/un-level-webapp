export default function Roadmap() {
	const data = [
		{
			date: 'Q4 2022',
			title: 'Building The Foundations',
			content: (
				<p>
					Product definition, action plan, tech stack.
					Create a strong foundation to build on top of it.
				</p>
			),
		},
		{
			date: 'Q1 2023',
			title: 'Artist In The Zone',
			content: (
				<p>
					Beautiful, unique and meaningful Art.
					Design an impactful NFT Collection representing the Un-Level vision.  
				</p>
			),
		},
		{
			date: 'Q2 2023',
			title: 'NFT Public Sale',
			content: (
				<p>
					A Molecule that evolve sitting on your hands.
					Setup The Un-Level Minting Website.
				</p>
			),
		},
		{
			date: 'Q3 2023',
			title: 'Un-Level DApp',
			content: (
				<p>
					A life-changing application hits the blockchain.
					Release first version of Un-Level DApp, providing key features to our
					community.
				</p>
			),
		},
		{
			date: '2024',
			title: 'Metaverse',
			content: (
				<p>
					Explore, Connect, Evolve.
					Allow interoperability to Un-Level NFTs.
					Create The Big Hall & Smart Gym.
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
