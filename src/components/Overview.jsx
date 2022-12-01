import UnLevelMolecule from './../assets/un-level-molecule-reversed-min.mp4'

export default function Overview() {
	return (
		<section
			about='overview'
			id='overview'
			className='bg-white text-black'>
			<div className='px-6 pt-12 flex flex-col gap-3'>
				<h1 className='font-semibold text-4xl leading-snug'>
					Unlock your full potential through
					<br />
					<span className='text-transparent bg-gradient-to-r from-site-secondary-600 to-site-primary-600 bg-clip-text'>
						Un-Level
					</span>{' '}
					NFTs
				</h1>
				<h2 className='font-semibold text-lg'>
					The first NFT Collection that evolves overtime.
				</h2>
				<div className='flex flex-row gap-3 w-full pt-3 font-semibold text-base place-content-center place-items-center'>
					<button
						className='rounded-full bg-gradient-to-r from-neutral-700 to-neutral-500 text-neutral-300/80 px-6 py-3 cursor-not-allowed'
						disabled>
						Launch App
					</button>
					<a
						href='https://docs.un-level.com/'
						target='_blank'
						rel='noreferrer'
						className='rounded-full bg-gradient-to-br from-site-primary-700 to-site-secondary-900 text-white px-6 py-3 timeline-content-card cursor-pointer'>
						Docs
					</a>
				</div>
			</div>

			<div className='overflow-hidden transform-gpu'>
				<video
					muted
					autoPlay
					loop
					src={UnLevelMolecule}
					alt='Video de molécula'
					className='scale-75 transform-gpu'></video>
			</div>
		</section>
	)
}
