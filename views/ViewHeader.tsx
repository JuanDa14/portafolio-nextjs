import { useEffect, useRef } from 'react';
import Link from 'next/link';

import Lottie from 'lottie-react';
import Typed, { TypedOptions } from 'typed.js';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineDownload } from 'react-icons/hi';
import { coder } from '../public/lottie';

const options: TypedOptions = {
	strings: ['FullStack Developer.'],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true,
};

export const ViewHeader = () => {
	const span = useRef() as React.MutableRefObject<HTMLInputElement>;
	const typed = useRef() as React.MutableRefObject<Typed>;

	useEffect(() => {
		typed.current = new Typed(span.current, options);

		return () => {
			typed.current.destroy();
		};
	}, []);

	return (
		<section className='pt-5'>
			<article className='flex items-center justify-between flex-col gap-5 mt-24 md:flex-row'>
				<div className='w-full md:w-6/12'>
					<h1 className='text-step-4 font-bold capitalize bg-gradient-to-r from-green-main to bg-cyan-main bg-clip-text text-transparent'>
						JuanCode
					</h1>
					<span
						ref={span}
						className='text-step-2 font-semibold bg-gradient-to-r from-green-main to bg-cyan-main bg-clip-text text-transparent'
					></span>
					<p className='mt-2 text-step-0'>
						Estoy en busca de nuevos retos y oportunidades que me permitan crecer como
						profesional. Me emociona aprender cosas nuevas por lo que constantemente estoy en
						aprendizaje.
					</p>
					<div className='mt-3 text-step-1 flex justify-between items-center gap-6'>
						<ul className='flex gap-5'>
							<li className='hover:-translate-y-1 transition-transform duration-300'>
								<Link
									href='https://www.linkedin.com/in/juan-david-morales-paredes-617342224'
									passHref
									legacyBehavior
								>
									<a target='_blank'>
										<BsLinkedin />
									</a>
								</Link>
							</li>
							<li className='hover:-translate-y-1 transition-transform duration-300'>
								<Link href='https://github.com/JuanDa14' passHref legacyBehavior>
									<a target='_blank'>
										<BsGithub />
									</a>
								</Link>
							</li>
							<li className='hover:-translate-y-1 transition-transform duration-300'>
								<Link href='https://www.instagram.com/ju4n.code/' passHref legacyBehavior>
									<a target='_blank'>
										<BsInstagram />
									</a>
								</Link>
							</li>
						</ul>
						<div>
							<a
								href='/CV - Juan Morales.pdf'
								download
								type='button'
								className='text-step-0 flex items-center text-center gap-2 px-4 py-1 rounded-lg bg-white  text-twitch-dark font-semibold'
							>
								<span>Descargar CV</span>
								<HiOutlineDownload />
							</a>
						</div>
					</div>
				</div>
				<div className='w-6/12 max-w-[400px]'>
					<Lottie animationData={coder} loop={true} async />
				</div>
			</article>
		</section>
	);
};
