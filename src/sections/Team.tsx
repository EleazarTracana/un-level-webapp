import { HiUser } from 'react-icons/hi'
import { ImLinkedin } from 'react-icons/im'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import useMediaQuery from '../hooks/useMediaQuery'

import perrito from './../resources/perrito.jpg'
import alguien from './../resources/alguien.jpg'

export default function Team() {
	const data = [
		{
			name: 'Alguien',
			position: 'CEO Assistant',
			linkedIn: 'https://www.linkedin.com/in/alguien/',
			picture: alguien,
		},
		{
			name: 'Full name no linkedIn & picture and super long',
			position: 'Position',
			linkedIn: '',
			picture: '',
		},
		{
			name: 'Perrito',
			position: 'CEO / Founder',
			linkedIn: 'https://www.linkedin.com/in/unperro/',
			picture: perrito,
		},
	]

	const screenSm = useMediaQuery('(min-width: 640px)')
	const screenXl = useMediaQuery('(min-width: 1280px)')

	let slidesPerView = 1
	if (screenSm) slidesPerView = 2
	if (screenXl) slidesPerView = 3

	return (
		<section
			about='team'
			id='team'
			className='overflow-hidden bg-white py-16 text-black lg:py-24'>
			<div className='container mx-auto'>
				<h3 className='w-full px-6 text-left text-4xl font-semibold leading-snug lg:text-center'>
					Out Team
				</h3>
				<div className='mx-auto flex max-w-prose flex-col gap-12 px-6 pt-6 text-lg leading-loose lg:text-center'>
					<p>
						Our group of experienced cybersecurity specialists,
						blockchain engineers, finance proffesionals, and
						white-hat hackers are united in their pursuit to
						mitigate the financial impact of exploits and malicious
						cyber activity.
					</p>
				</div>
				<div className='grid h-auto place-items-center py-6 sm:py-12 lg:py-24'>
					<Swiper
						className='h-full w-full translate-x-0 select-none'
						modules={[Navigation, Pagination, A11y, Autoplay]}
						spaceBetween={slidesPerView === 1 ? 50 : 0}
						autoplay={{}}
						loop
						navigation={screenSm}
						pagination={{ clickable: true }}
						slidesPerView={slidesPerView}>
						{data.map((person, index) => {
							return (
								<SwiperSlide key={index + person.name}>
									<div className='grid h-auto w-full grid-flow-row place-items-center'>
										<div className='grid aspect-[3/4] h-auto w-2/3 place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-site-primary-700 to-site-secondary-700'>
											{person.picture === '' && (
												<HiUser className='h-1/2 w-1/2 text-black opacity-50' />
											)}
											{person.picture !== '' && (
												<img
													className='h-full w-full object-cover object-center'
													src={person.picture}
													alt=''
													loading='lazy'
												/>
											)}
										</div>
										<div className='h-auto w-2/3 py-3 px-2 text-left'>
											<p className='text-base uppercase opacity-75'>
												{person.position}
											</p>
											<div className='flex items-center gap-3'>
												<p className='text-lg'>
													{person.name}
												</p>
												{person.linkedIn !== '' && (
													<a
														href={person.linkedIn}
														target='_blank'
														rel='noopener noreferrer'>
														<ImLinkedin />
													</a>
												)}
											</div>
										</div>
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</div>
		</section>
	)
}
