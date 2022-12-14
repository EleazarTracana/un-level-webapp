import discord from '../assets//images/social/icons8-discord.svg'
import twitter from '../assets//images/social/icons8-twitter.svg'
import telegram from '../assets//images/social/icons8-telegram-app.svg'
import github from '../assets//images/social/icons8-github.svg'
import medium from '../assets//images/social/icons8-medium-old.svg'
import linkedin from '../assets//images/social/icons8-linkedin-2.svg'
import instagram from '../assets//images/social/icons8-instagram.svg'
import facebook from '../assets//images/social/icons8-facebook.svg'
import gitbook from '../assets//images/social/gitbook-icon.svg'

const socialData = [
	{
		image: discord,
		text: "Join Our Discord",
		redirect: ""
	}, {
		image: twitter,
		text: "Join Our Twitter",
		redirect: ""
	}, {
		image: facebook,
		text: "Join Our Facebook",
		redirect: ""
	}, {
		image: telegram,
		text: "Join Our Telegram",
		redirect: ""
	}, {
		image: github,
		text: "Join Our Github",
		redirect: ""
	}, {
		image: medium,
		text: "Join Our Medium",
		redirect: ""
	}, {
		image: linkedin,
		text: "Join Our Linkedin",
		redirect: ""
	}, {
		image: instagram,
		text: "Join Our Instagram",
		redirect: ""
	}, {
		image: gitbook,
		text: "Join Our Gitbook",
		redirect: ""
	}
]

export default function Social() {
	return (
		<section id="social" className="container mx-auto px-6 py-12 lg:py-24">
			<h3 className='w-full text-left text-4xl font-semibold leading-normal lg:text-center mb-4'>
				Join the TRIBE
			</h3>
			<p className='text-left sm:text-center mb-4'>Be a part of the revolution within the DeFi & NFT space like never before!</p>
			<div className="flex flex-col justify-around items-center w-full">
				<div className="flex items-center justify-center">
					<div className='p-2 sm:p-6 bg-[#41152525] w-[140px] sm:w-[200px] md:w-[200px] lg:w-[220px] mx-2 my-4 rounded shadow-social'>
						<a className='w-full flex flex-col items-center' href="https://discord.gg/NPDvxBMQ">
							<div className='w-[80%] mb-4 mx-2'>
								<img className='w-full' src={discord} alt="discord" />
							</div>
							<p className='text-sm sm:text-base text-center'>Join Our Discord</p>
						</a>
					</div>
				</div>

				<div className="w-full flex items-center justify-center flex-wrap">
					<div className='flex w-full justify-center'>
						{
							socialData.slice(1, 5).map((item, index) => {
								return (
									<div key={index + "_social"} className='max-w-[180px] p-2.5 sm:p-4 bg-[#41152525] w-1/4 mx-2 my-2 shadow-social'>
										<a className='w-full flex flex-col items-center' href={item.redirect}>
											<div className='w-full max-w-[40px] sm:w-[70px] sm:max-w-[70px]'>
												<img className='w-full' src={item.image} alt="discord" />
											</div>
											<p className='text-center text-xs mt-4 hidden sm:block'>{item.text}</p>
										</a>
									</div>
								)
							})
						}
					</div>
					<div className='flex w-full justify-center'>
						{
							socialData.slice(-4).map((item, index) => {
								return (
									<div key={index + "_social"} className='max-w-[180px] p-2 sm:p-4 bg-[#41152525] w-1/4 mx-2 my-2  shadow-social'>
										<a className='w-full flex flex-col items-center' href={item.redirect}>
											<div className='w-full max-w-[40px] sm:w-[70px] sm:max-w-[70px]'>
												<img className='w-full' src={item.image} alt="discord" />
											</div>
											<p className='text-center text-xs mt-4 hidden sm:block'>{item.text}</p>
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