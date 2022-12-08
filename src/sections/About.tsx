import evolutionLadder from '../assets/images/evolution-ladder.webp'

export default function About() {
	return (
		<section
			about='about'
			id='about'>
			<div className=' container mx-auto px-6 py-16'>
				<h3 className='mx-auto max-w-prose origin-left text-4xl font-semibold leading-normal transition-all lg:origin-center lg:text-center'>
					As you evolve, <br /> your NFT does too
				</h3>
				<div className='mx-auto grid grid-flow-row gap-12 pt-6 text-justify text-lg leading-loose lg:grid-cols-2 lg:items-center lg:gap-24 lg:pt-24'>
					<p className='max-w-prose transition-all lg:col-start-2 lg:row-start-1'>
						We believe that the most valuable asset on earth is
						time. We have developed a mechanism to make our NFT
						evolve overtime, just as humans do. This way our digital
						asset embraces one of the most beautiful aspects of life
						itself: evolution.
						<br />
						We start from the tiniest organism the human body is
						made of: molecules. In our public sale every investor
						will get a high-quality NFT molecule that will go
						through{' '}
						<span className='font-semibold tracking-wider text-site-primary-500'>
							12 different stages
						</span>
						until it reaches its final unique form.
					</p>
					<img
						loading='lazy'
						className='h-auto w-full max-w-prose rounded-lg transition-all sm:rounded-3xl lg:col-start-1 lg:row-start-1'
						src={evolutionLadder}
						alt=''
					/>
					<p className='max-w-prose transition-all lg:col-span-2 lg:mx-auto'>
						Every NFT stage will get you a different access to our
						community's tools and a given weight of vote on our DAO
						Governance. As you approximate to what we like to call
						{` `}
						<span className='font-semibold tracking-wider text-site-primary-500'>
							"The Higher Self"
						</span>
						, more features will be unlocked and your weight of vote
						will also increase.
					</p>
				</div>
			</div>
		</section>
	)
}
