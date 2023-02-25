import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { BsCodeSlash } from 'react-icons/bs';
import Loader from './Loader';

export const NavBar = () => {
	const router = useRouter();

	const [activeLink, setActiveLink] = useState('');

	useEffect(() => {
		if (router.asPath) {
			setActiveLink(router.asPath.split('/')[1]);
		}
	}, [activeLink, router]);

	return (
		<header className='min-w-full bg-twitch-dark font-roboto border-b border-twitch-light shadow-lg fixed top-0 left-0 z-50'>
			<Loader />
			<div className='px-5 py-4 mx-auto flex justify-between items-center lg:max-w-5xl xl:max-w-6xl md:px-0'>
				<div className='hidden sm:flex text-step-1'>
					<Link href='#inicio' passHref legacyBehavior>
						<a className='cursor-pointer'>
							<BsCodeSlash />
						</a>
					</Link>
				</div>
				<nav className='w-full sm:w-auto'>
					<ul className='gap-0 flex justify-between items-center sm:gap-5 text-step--1 font-bold'>
						<li>
							<Link href='#conocimientos' passHref legacyBehavior>
								<a
									className={`flex items-center gap-1 p-1 hover:text-green-main ${
										activeLink === '#conocimientos' && 'text-green-main'
									}`}
								>
									Conocimientos
								</a>
							</Link>
						</li>
						<li>
							<Link href='#proyectos' passHref legacyBehavior>
								<a
									className={`flex items-center gap-1 p-1 hover:text-green-main ${
										activeLink === '#proyectos' && 'text-green-main'
									}`}
								>
									Proyectos
								</a>
							</Link>
						</li>
						<li>
							<Link href='#contacto' passHref legacyBehavior>
								<a
									className={`flex items-center gap-1 p-1 hover:text-green-main ${
										activeLink === '#contacto' && 'text-green-main'
									}`}
								>
									Contacto
								</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
