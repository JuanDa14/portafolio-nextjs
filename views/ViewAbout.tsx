import Lottie from 'lottie-react';
import { computer, website } from '../public/lottie';

export const ViewAbout = () => {
	return (
		<section className='mt-24 rounded-lg shadow-sm'>
			<article className='w-full flex flex-row-reverse items-center gap-5 bg-zinc-900/50'>
				<div className='flex-1 flex flex-col gap-4 justify-center  px-5 py-10 md:px-10 md:py-10'>
					<h2 className='capitalize font-bold text-step-2'>¿Quién soy?</h2>
					<p className='text-gray-400 text-step-0'>
						Apasionado, Empático, Responsable, Amante del desarrollo web.
					</p>
					<p className='text-step-0 '>
						Hola mi nombre es Juan David y soy un{' '}
						<span className='text-green-main'>Fullstack Developer</span>, estudiante de la
						carrera de Ingeniera de Sistemas. Enfocado en el{' '}
						<span className='text-cyan-main'>Desarrollo Web</span>, conocimientos en las
						tecnologías como React, Nextjs, para la parte de Frontend, NodeJs, Sequealize,
						TypeORM, Express para el Backend y PostgreSQL, MongoDB, MySQL para el desarrollo
						de Base de Datos.
					</p>
				</div>
				{/* //Rotar la imagen de la derecha a la izquierda */}
				<Lottie
					className='flex-1 hidden md:flex flex-col-reverse items-center justify-center max-w-[400px] border-r-[1px] border-zinc-800'
					renderer='svg'
					animationData={website}
					loop={true}
				/>
			</article>
		</section>
	);
};
