import { useEffect, useState } from 'react'
import { ImSpinner2 as Spinner } from 'react-icons/im'
import UnLevelMolecule from './../assets/videos/molecule-reversed-min.mp4'

export default function Overview() {
	const [video, setVideo] = useState({
		inDom: false,
		scaled: false,
		canPlay: false,
	})

	useEffect(() => {
		const timer = setTimeout(() => {
			setVideo({ inDom: true, scaled: false, canPlay: false })
		}, 100)
		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<section
			about='overview'
			className=' h-auto w-full bg-white text-black'>
			<div
				about='overview'
				id='overview'
				className='mx-auto grid grid-flow-row  items-center md:grid-flow-col md:py-12 lg:container lg:grid-cols-2 lg:place-content-center'>
				<div className='flex flex-col gap-3 px-6 pt-12 transition-all duration-1000 ease-[cubic-bezier(0.34,1.5,0.55s,1)] lg:gap-6 xl:gap-12'>
					<h1 className='text-4xl font-semibold leading-snug sm:text-6xl sm:leading-normal xl:text-7xl xl:leading-snug'>
						Unlock your full potential through
						<br />
						<span className='bg-gradient-to-r from-site-secondary-600 to-site-primary-600 bg-clip-text text-transparent'>
							Un-Level
						</span>{' '}
						NFTs
					</h1>
					<h2 className='text-lg font-semibold sm:text-2xl'>
						The first NFT Collection that evolves overtime.
					</h2>
					<div className='flex w-full flex-row place-content-center items-center justify-start gap-3 pt-3 text-base font-semibold sm:text-lg'>
						<button
							className='cursor-not-allowed rounded-full bg-gradient-to-r from-neutral-700 to-neutral-500 px-6 py-3 text-neutral-300/80'
							disabled>
							Launch App
						</button>
						<a
							href='https://docs.un-level.com/'
							target='_blank'
							rel='noreferrer'
							className='timeline-content-card cursor-pointer rounded-full bg-gradient-to-br from-site-primary-700 to-site-secondary-900 px-6 py-3 text-white'>
							Docs
						</a>
					</div>
				</div>

				<div className='transform-gpu overflow-hidden'>
					<div className='grid aspect-square h-auto w-full place-content-center place-items-center'>
						{!video.canPlay && (
							<div className='col-start-1 row-start-1 grid h-full w-full place-items-center '>
								<Spinner className='animate-spin text-4xl' />
							</div>
						)}
						{video.inDom && (
							<video
								muted={true}
								onPlaying={(e) => {
									setVideo({
										inDom: true,
										scaled: true,
										canPlay: true,
									})
								}}
								onCanPlay={(e) => {
									const target = e.target as HTMLVideoElement
									setVideo({
										inDom: true,
										scaled: false,
										canPlay: true,
									})
									target.play()
								}}
								playsInline={true}
								autoPlay={true}
								disableRemotePlayback={true}
								disablePictureInPicture={true}
								loop={true}
								className={
									' col-start-1 row-start-1 h-full w-full transform-gpu transition-all delay-300 duration-[3000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]' +
									`${video.scaled ? ' scale-100' : ' scale-0'}`
								}>
								<source
									src={UnLevelMolecule}
									type='video/mp4'
								/>
							</video>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
