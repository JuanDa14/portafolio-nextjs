import { useState } from 'react';
import Lottie from 'lottie-react';

import { sendEmail, DataEmail } from '../utils';
import { contact } from '../public/lottie';

const initialState = {
	name: '',
	email: '',
	subject: '',
	message: '',
};

export const ViewContact = () => {
	const [values, setValues] = useState<DataEmail>(initialState);

	const [loading, setLoading] = useState(false);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		await sendEmail(values);

		setValues(initialState);

		setLoading(false);
	};

	return (
		<section className='mt-20 flex items-center justify-between' id='contacto'>
			<article>
				<h2 className='font-bold capitalize text-step-1 mb-5'>Contáctame</h2>
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
						autoComplete='off'
						value={values.name}
					/>
					<input
						className='block w-full p-3 bg-zinc-900 text-gray-400 mb-4 rounded-md text-step--1'
						type='email'
						placeholder='Correo electronico'
						name='email'
						onChange={(e) => setValues({ ...values, email: e.target.value })}
						autoComplete='off'
						required
						value={values.email}
					/>
					<input
						className='block w-full p-3 bg-zinc-900 text-gray-400 mb-4 rounded-md text-step--1'
						type='text'
						placeholder='Asunto'
						name='subject'
						onChange={(e) => setValues({ ...values, subject: e.target.value })}
						autoComplete='off'
						required
						value={values.subject}
					/>
					<textarea
						placeholder='Mensaje'
						className='block w-full p-3 bg-zinc-900 text-gray-400 mb-4 rounded-md resize-none h-36 text-step--1'
						name='message'
						onChange={(e) => setValues({ ...values, message: e.target.value })}
						autoComplete='off'
						required
						value={values.message}
					/>
					<div className='w-full flex justify-end'>
						<button
							disabled={loading}
							className='border rounded-md py-2 px-3 text-step--1 text-white font-bold disabled:border-gray-500 disabled:text-gray-500 hover:border-green-main hover:text-green-main transition-colors duration-300'
							type='submit'
						>
							{loading ? 'Enviando...' : 'Enviar Mensaje'}
						</button>
					</div>
				</form>
			</article>
			<article className='hidden md:flex w-6/12 mx-auto relative'>
				<Lottie animationData={contact} loop={true} />
			</article>
		</section>
	);
};
