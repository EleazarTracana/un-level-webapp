import evolutionLadder from '../assets/evolution-ladder-1.png'

export default function SecondaryOverview() {
	return (
		<section
			about='secondary-overview'
			id='secondary-overview'>
			<div className=' px-6 py-16'>
				<h3 className='font-semibold text-4xl leading-normal'>
					As you evolve, <br /> your NFT does too
				</h3>
				<div className='text-lg leading-loose flex flex-col gap-12 pt-6'>
					<p>
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
						<span className='font-semibold text-site-primary-500'>
							12 different stages
						</span>
						, until it reaches its final unique form.
					</p>
					<img
						className='w-full h-auto rounded-lg'
						src={evolutionLadder}
						alt=''
					/>
					<p>
						Every NFT stage will get you a different access to our
						community's tools and a given weight of vote on our DAO
						Governance. As you approximate to what we like to call
						{` `}
						<span className='font-semibold text-site-primary-500'>
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
