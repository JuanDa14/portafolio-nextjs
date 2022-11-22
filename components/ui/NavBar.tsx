import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { BsCodeSlash } from 'react-icons/bs';

export const NavBar = () => {
	const router = useRouter();

	const [activeLink, setActiveLink] = useState('');

	useEffect(() => {
		if (router.asPath) {
			setActiveLink(router.asPath.split('/')[1]);
		}
	}, [activeLink, router]);

	return (
		<header className='min-w-full font-roboto border-b border-twitch-light shadow-lg'>
			<div className='px-5 py-4 mx-auto flex justify-between items-center lg:px-10 lg:max-w-[1200px] xl:max-w-[1400px]'>
				<div className='text-step-1'>
					<Link href='#inicio' passHref legacyBehavior>
						<a className='cursor-pointer'>
							<BsCodeSlash />
						</a>
					</Link>
				</div>
				<nav>
					<ul className='flex justify-between items-center gap-5 text-step--1 font-bold'>
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
