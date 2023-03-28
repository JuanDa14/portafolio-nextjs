import { useEffect, useRef } from 'react';
import Link from 'next/link';

import Lottie from 'lottie-react';

import Typed from 'typed.js';

import { coder } from '../public/lottie';
import { seed } from '../data';
import { SocialLinks } from '../components';

export const ViewHeader = () => {
	const span = useRef() as React.MutableRefObject<HTMLInputElement>;
	const typed = useRef() as React.MutableRefObject<Typed>;

	useEffect(() => {
		typed.current = new Typed(span.current, seed.options);

		return () => {
			typed.current.destroy();
		};
	}, []);

	return (
		<section className='pt-16 -z-10'>
			<article className='flex items-center justify-between flex-col gap-5 mt-10 md:flex-row lg:max-w-5xl xl:max-w-6xl mx-auto'>
				<div className='w-full md:w-5/12'>
					<h1 className='text-step-4 font-bold capitalize bg-gradient-to-r from-green-main to bg-cyan-main bg-clip-text text-transparent'>
						JuanCode
					</h1>
					<span
						ref={span}
						className='text-step-2 font-semibold bg-gradient-to-r from-green-main to bg-cyan-main bg-clip-text text-transparent'
					></span>
					<p className='mt-2 text-step-0 text-gray-100'>
						Me gusta crear cosas que vivan en internet, desde sitios web hasta aplicaciones
						móviles. Mi objetivo es siempre construir productos que proporcionen experiencias
						simples, bonitas y de alta calidad.
					</p>
					<div className='mt-3 text-step-1 flex items-center justify-between'>
						<SocialLinks socials={seed.socials} />
						<Link href='/CV - Juan Morales.pdf' passHref legacyBehavior title='Descargar CV'>
							<a
								download='CV-Juan-Morales'
								target='_blank'
								className='flex items-center gap-1 border rounded-md py-2 px-3 text-base text-gray-400 border-gray-400 hover:text-white hover:border-white transition-colors duration-300 ease-in-out'
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
				<Lottie
					renderer='svg'
					className='w-auto sm:max-w-sm md:max-w-md h-full -z-10'
					animationData={coder}
					loop
					autoplay={true}
				/>
			</article>
		</section>
	);
};
