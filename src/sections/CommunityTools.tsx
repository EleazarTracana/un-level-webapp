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
					<li>Digital Content Library</li>
					<li>Career Booster Program</li>
				</ul>
			),
		},
		{
			title: 'Metaverse',
		},
		{
			title: 'Interoperability',
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
			className='container mx-auto bg-cover bg-center py-12 text-center lg:py-24 rounded-full'>
			<h3 className='w-full px-6 text-left text-4xl font-semibold leading-snug lg:text-center'>
				Community Tools
			</h3>
			<div className='grid h-auto place-items-center py-6'>
				<Swiper
					className='h-full w-full translate-x-0 select-none'
					modules={[Navigation, Pagination, A11y, Autoplay]}
					spaceBetween={50}
					autoplay={{}}
					loop
					navigation={screenSm}
					pagination={{ clickable: true }}
					slidesPerView={slidesPerView}>
					{slides.map((slide, index) => {
						return (
							<SwiperSlide key={index + slide.title}>
								<div className='h-auto w-full p-6'>
									<div className='grid aspect-video h-auto w-full place-content-center place-items-center gap-3 rounded-xl bg-site-secondary-900/75 p-1 outline outline-2 outline-site-secondary-500'>
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
