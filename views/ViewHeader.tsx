import { useEffect, useRef } from 'react';
import Link from 'next/link';

import Lottie from 'lottie-react';

import Typed, { TypedOptions } from 'typed.js';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
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
			<article className='flex items-center justify-between flex-col gap-5 mt-10 md:flex-row'>
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
						<ul className='flex gap-3'>
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
						<Link href='/CV - Juan Morales.pdf' passHref legacyBehavior>
							<a
								download='Curriculum'
								target='_blank'
								className=' flex items-center gap-1 border rounded-md py-2 px-3 text-base text-white font-bold disabled:border-gray-500 disabled:text-gray-500 hover:border-green-main hover:text-green-main transition-colors duration-300 ease-in-out'
							>
								<span>Descargar CV</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
									/>
								</svg>
							</a>
						</Link>
					</div>
				</div>
				<div className='w-6/12 max-w-[400px]'>
					<Lottie renderer='svg' animationData={coder} loop={true} />
				</div>
			</article>
		</section>
	);
};
