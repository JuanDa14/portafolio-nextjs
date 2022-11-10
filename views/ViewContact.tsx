import { useState } from 'react';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react';

import { contact } from '../public/lottie';

type valuesByForm = {
	name: string;
	email: string;
	title: string;
	description: string;
};

export const ViewContact = () => {
	const [values, setValues] = useState<valuesByForm>({
		name: '',
		email: '',
		title: '',
		description: '',
	});

	const [loading, setLoading] = useState(false);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};

	return (
		<section className='mt-20 flex items-center justify-between' id='contacto'>
			<div>
				<h3 className='font-bold capitalize text-step-1 mb-5'>Contáctame</h3>
				<p className='mb-5 text-step--1'>
					Me interesan los proyectos que involucren el desarrollo de software, la creación de
					aplicaciones web y móviles. Si quieres contactarme no dudes en utilizar el formulario
					o através de mis redes sociales.
				</p>
				<form onSubmit={onSubmit}>
					<input
						className='block w-full p-3 bg-zinc-900 text-gray-400 mb-4 rounded-md text-step--1'
						type='text'
						placeholder='Nombre'
						name='name'
						onChange={(e) => setValues({ ...values, name: e.target.value })}
						required
					/>
					<input
						className='block w-full p-3 bg-zinc-900 text-gray-400 mb-4 rounded-md text-step--1'
						type='email'
						placeholder='Correo electronico'
						name='email'
						onChange={(e) => setValues({ ...values, email: e.target.value })}
						required
					/>
					<input
						className='block w-full p-3 bg-zinc-900 text-gray-400 mb-4 rounded-md text-step--1'
						type='text'
						placeholder='Asunto'
						name='title'
						onChange={(e) => setValues({ ...values, title: e.target.value })}
						required
					/>
					<textarea
						placeholder='Mensaje'
						className='block w-full p-3 bg-zinc-900 text-gray-400 mb-4 rounded-md resize-none h-36 text-step--1'
						name='description'
						onChange={(e) => setValues({ ...values, description: e.target.value })}
						required
					/>
					<div className='w-full flex justify-end'>
						<button
							disabled={loading}
							className='border rounded-md py-2 px-3 text-step--1 text-white font-bold disabled:border-gray-500 disabled:text-gray-500 hover:border-green-main hover:text-green-main transition-colors duration-300'
							type='submit'
						>
							Enviar Mensaje
						</button>
					</div>
				</form>
			</div>
			<div className='hidden md:flex w-6/12 mx-auto'>
				<Lottie animationData={contact} loop={true} />
			</div>
		</section>
	);
};
