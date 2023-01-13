import discord from '../assets//images/social/icono_discord.png'
import twitter from '../assets//images/social/icono_twitter.png'
import medium from '../assets//images/social/icono_medium.png'
import linkedin from '../assets//images/social/icono_linkedin.png'
import instagram from '../assets//images/social/icono_instagram.png'

const socialData = [
	{
		image: twitter,
		text: "Join Our Twitter",
		redirect: "https://twitter.com/unlevel_eth"
	}, {
		image: medium,
		text: "Join Our Medium",
		redirect: ""
	}, {
		image: linkedin,
		text: "Join Our Linkedin",
		redirect: "https://www.linkedin.com/company/un-level"
	}, {
		image: instagram,
		text: "Join Our Instagram",
		redirect: "https://www.instagram.com/unlevel.eth"
	}
]

export default function Social() {
	return (
		<section id="social" className="container mx-auto px-6 py-12 lg:py-24">
			<h3 className='w-full text-left text-4xl font-semibold leading-normal lg:text-center mb-4'>
				Join The Path Of Evolution
			</h3>
			<p className='text-left sm:text-center mb-4 font-semibold'>Be part of the biggest self-development community</p>
			<div className="flex flex-col justify-around items-center w-full">
				<div className="flex items-center justify-center">
					<div className='p-2 sm:p-6 bg-[#41152525] w-[140px] sm:w-[200px] md:w-[200px] lg:w-[220px] mx-2 my-4 rounded shadow-social'>
						<a className='w-full flex flex-col items-center' href="#" target="__blank">
							<div className='w-[80%] mb-4 mx-2'>
								<img className='w-full' src={discord} alt="discord" />
							</div>
							<p className='text-sm sm:text-base text-center font-semibold'>Join Our Discord</p>
							<br/>
						</a>
					</div>
				</div>

				<div className="w-full flex items-center justify-center flex-wrap">
					<div className='flex w-full justify-center'>
						{
							socialData.map((item, index) => {
								return (
									<div key={index + "_social"} className='max-w-[180px] p-2.5 sm:p-4 bg-[#41152525] w-1/4 mx-2 my-2 shadow-social'>
										<a className='w-full flex flex-col items-center' href={item.redirect} target="__blank">
											<div className='w-full max-w-[40px] sm:w-[70px] sm:max-w-[70px]'>
												<img className='w-full' src={item.image} alt="discord" />
											</div>
											<p className='text-center text-xs mt-4 hidden sm:block font-semibold'>{item.text}</p>
										</a>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</section>
	)
}