export const ViewAbout = () => {
	return (
		<section className='my-20 bg-about_image bg-cover bg-no-repeat bg-fixed absolute right-0 left-0'>
			<article className='bg-twitch-light/60 py-10'>
				<div className='flex flex-col gap-4 px-5 lg:px-10 lg:max-w-[1200px] xl:max-w-[1400px] mx-auto'>
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
			</article>
		</section>
	);
};
