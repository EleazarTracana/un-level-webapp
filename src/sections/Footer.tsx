import { ImInstagram, ImLinkedin, ImTwitter } from 'react-icons/im'
import { ReactComponent as Logo } from './../assets/logo.svg'

export default function Footer() {
	const socialMedia = [
		{
			id: 'social-media-1',
			icon: <ImInstagram />,
			link: 'https://www.instagram.com/unlevel.eth/',
		},
		{
			id: 'social-media-3',
			icon: <ImTwitter />,
			link: 'https://twitter.com/unlevel_eth',
		},
		{
			id: 'social-media-4',
			icon: <ImLinkedin />,
			link: 'https://www.linkedin.com/company/un-level',
		},
	]

	return (
		<section
			about='footer'
			className='container mx-auto flex h-auto flex-col items-center px-6'>
			<div className='grid w-full grid-flow-row place-items-center items-center gap-3 py-6 text-center'>
				<Logo className='h-auto w-24' />
				<p>A new way to make the payments easy, reliable and secure.</p>
			</div>
			<div className='grid w-full grid-flow-row items-center justify-center gap-6 pb-6 md:grid-flow-col md:justify-between md:p-6 md:pb-12'>
				<p className='text-center text-sm font-normal'>
					Copyright Ⓒ {new Date().getFullYear()} Un-Level. All Rights
					Reserved.
				</p>
				<div className='grid grid-flow-col items-center gap-6'>
					{socialMedia.map((social, index) => {
						return (
							<a
								key={index + social.id}
								href={social.link}
								target='_blank'
								rel='noopener noreferrer'
								className='grid h-auto w-auto place-items-center text-xl'>
								{social.icon}
							</a>
						)
					})}
				</div>
			</div>
		</section>
	)
}
