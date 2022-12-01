import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import background from './../assets/background-neon-v1.png'
import useMediaQuery from '../hooks/useMediaQuery'

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

	return (
		<section
			about='community-tools'
			className='text-center py-12'>
			<h3 className='font-semibold text-4xl leading-snug text-center px-4'>
				Community Tools
			</h3>
			<div
				style={{ backgroundImage: `url("${background}")` }}
				className='grid place-items-center h-auto bg-center bg-cover py-6'>
				<Swiper
					className='w-full h-full translate-x-0 select-none'
					modules={[Navigation, Pagination, A11y, Autoplay]}
					spaceBetween={50}
					autoplay={{}}
					navigation={screenSm}
					pagination={{ clickable: true }}
					slidesPerView={1}>
					{slides.map((slide, index) => {
						return (
							<SwiperSlide key={index + slide.title}>
								<div className='w-full h-auto p-6'>
									<div className='w-full h-auto p-1 outline outline-2 rounded-xl outline-site-secondary-500 bg-site-secondary-900/80 aspect-video grid place-items-center place-content-center gap-3'>
										<h4 className='font-semibold text-xl'>
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
