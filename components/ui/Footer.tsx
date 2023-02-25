import Link from 'next/link';
import { BsInstagram, BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';

type SocialMedia = {
	name: string;
	icon: JSX.Element;
	url: string;
};

const socials: SocialMedia[] = [
	{
		name: 'Linkedin',
		icon: <BsLinkedin size={20} />,
		url: 'https://www.linkedin.com/in/juan-david-morales-paredes-617342224',
	},
	{
		name: 'Github',
		icon: <BsGithub size={20} />,
		url: 'https://github.com/JuanDa14',
	},
	{
		name: 'Instagram',
		icon: <BsInstagram size={20} />,
		url: 'https://www.instagram.com/ju4n.code/',
	},
	{
		name: 'Facebook',
		icon: <BsFacebook size={20} />,
		url: 'https://www.facebook.com/juandavid.moralesparedes',
	},
];

export const Footer = () => {
	return (
		<footer className='px-5 py-5 mt-10 text-center font-semibold text-step--0 font-roboto border-t border-twitch-light md:px-0'>
			<div className='lg:max-w-5xl xl:max-w-6xl mx-auto flex flex-col-reverse items-center gap-5 md:gap-10 md:flex-row md:justify-between'>
				<p>&copy; {new Date().getFullYear()} Juan David Morales Paredes</p>
				<ul className='flex gap-5'>
					{socials.map(({ name, icon, url }) => (
						<li
							className='text-gray-400 hover:scale-110 hover:text-white transition-all duration-300'
							key={name}
						>
							<Link href={url} passHref legacyBehavior>
								<a target='_blank'>{icon}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};
