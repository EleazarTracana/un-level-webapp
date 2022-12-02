export default function Mission() {
	const data = {
		title: 'Our Mission',
		content: (
			<p>
				We aim to become the #1 community of growth, connecting people
				worldwide that share our own values and principles and want to
				follow us through the next ladder of evolution.
			</p>
		),
	}

	return (
		<section
			about='mission'
			id='mission'
			className='py-12'>
			<div className='container relative mx-auto w-full max-w-prose p-2'>
				<div className='flex aspect-square w-full flex-col place-content-center place-items-center overflow-hidden rounded-[100%] bg-black bg-gradient-to-br from-site-primary-700/70 to-site-secondary-800/50 p-12 text-center duration-[3000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]'>
					<h3 className='w-full max-w-prose text-2xl font-semibold leading-loose text-white sm:text-4xl sm:leading-loose'>
						{data.title}
					</h3>
					<div className='w-full max-w-prose align-middle text-sm sm:text-xl'>
						{data.content}
					</div>
				</div>
			</div>
		</section>
	)
}
