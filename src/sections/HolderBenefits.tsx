import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import useMediaQuery from '../hooks/useMediaQuery'
import background from './../assets/images/background-neon.webp'

export default function CommunityTools() {
	const slides = [
		{
			title: 'Un-Level DApp',
			content: (
				<ul className='list-disc text-left'>
					<li><a href="https://docs.un-level.io/products/digital-content-library" target="_blank">Digital Content Library </a></li>
					<li><a href="https://docs.un-level.io/products/career-booster-program" target="_blank">Career Booster Program </a></li>
					<li><a href='https://docs.un-level.io/products/ambassador-program' target="_blank">Ambassador Program</a></li>
					<li><a href='https://docs.un-level.io/products/ambassador-program' target="_blank">Evolution Lab</a></li>
				</ul>
			),
		},
		{
			title: 'Metaverse',
			content: (
				<ul className='list-disc text-left'>
					<li><a href="https://docs.un-level.io/products/metaverse" target="_blank">The Big Hall</a></li>
					<li><a href="https://docs.un-level.io/products/metaverse" target="_blank">Smart Gym</a></li>
				</ul>
			),
		},
		{
			title: 'Interoperability',
			content: (
				<ul className='list-disc text-left'>
					<li>The SandBox</li>
					<li>Decentraland</li>
				</ul>
			),
		},
	]

	const screenSm = useMediaQuery('(min-width: 640px)')
	const screenXl = useMediaQuery('(min-width: 1280px)')

	let slidesPerView = 1
	if (screenSm) slidesPerView = 2
	if (screenXl) slidesPerView = 3

	return (
		<section
			about='community-tools'
			style={{ backgroundImage: `url("${background}")` }}
			className='container mx-auto rounded-full bg-cover bg-center py-12 text-center lg:py-24'>
			<h3 className='w-full px-6 text-left text-4xl font-semibold leading-snug lg:text-center'>
				Holder Benefits
			</h3>
			<div className='grid h-auto place-items-center py-6'>
				<Swiper
					className='h-full w-full translate-x-0 select-none'
					modules={[Navigation, Pagination, A11y, Autoplay]}
					spaceBetween={0}
					autoplay={{}}
					loop
					navigation={screenSm}
					pagination={{ clickable: true }}
					slidesPerView={slidesPerView}>
					{slides.map((slide, index) => {
						return (
							<SwiperSlide key={index + slide.title}>
								<div className=' mb-12 h-auto w-full p-6'>
									<div className=' grid aspect-video h-auto w-full place-content-center place-items-center gap-3 rounded-xl bg-site-secondary-900/75 p-1 outline outline-2 outline-site-secondary-500'>
										<h4 className='text-xl font-semibold'>
											{slide.title}
										</h4>
										{slide.content}
									</div>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</section>
	)
}
