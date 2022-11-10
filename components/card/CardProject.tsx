import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProject } from '../../interfaces';

export const CardProject: FC<IProject> = ({
	title,
	date,
	description,
	technologies,
	githubUrl,
	imageUrl,
	websiteUrl,
}) => {
	return (
		<div className='flex flex-col p-5 gap-1 rounded-lg bg-twitch-light/30 flex-1'>
			<Image
				src={imageUrl}
				alt={title}
				width={500}
				height={250}
				className='flex-1 rounded-lg mb-5'
			/>
			<h2 className='capitalize font-semibold mb-1 text-step-0'>{title}</h2>
			<span className='text-gray-300 font-semibold mb-1 text-step--1'>{`Ultima actualizacion: ${date}`}</span>
			<p className='text-gray-400 leading-normal mb-1'>{description}</p>
			<div className='flex justify-between items-center'>
				<span className='text-green-main'>{technologies.join(', ')}</span>
			</div>
			<div className='flex justify-between mt-3'>
				<Link href={githubUrl} legacyBehavior>
					<a target='_black' className='flex items-center gap-1 hover:underline'>
						Ver en Github
					</a>
				</Link>
				<Link href={websiteUrl} legacyBehavior>
					<a target='_black' className='flex items-center gap-1 hover:underline'>
						Ver en Web
					</a>
				</Link>
			</div>
		</div>
	);
};
