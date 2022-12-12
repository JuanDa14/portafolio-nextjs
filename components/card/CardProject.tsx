import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProject } from '../../interfaces';
import { formatDate } from '../../utils';

export const CardProject: FC<IProject> = ({
	title,
	description,
	technologies,
	githubUrl,
	imageUrl,
	websiteUrl,
	updatedAt,
}) => {
	return (
		<li className=' list-none bg-twitch-light/30 hover:bg-twitch-light/40 border border-zinc-800 rounded-lg shadow-md hover:cursor-pointer transition-colors duration-300 ease-in-out'>
			<Link href={websiteUrl} target='_blank'>
				<div>
					<figure>
						<Image
							className='rounded-t-lg h-[12.5rem] max-h-[13rem] object-cover object-center w-full '
							src={imageUrl}
							alt={title}
							width={500}
							height={200}
						/>
					</figure>
					<div>
						<div className='px-5 py-5'>
							<h2 className='font-bold text-step-0 whitespace-nowrap text-ellipsis overflow-hidden text-green-main mb-2'>
								{title}
							</h2>
							<p className='text-step--1 font-semibold flex gap-2 mb-2'>
								<span className='whitespace-nowrap text-ellipsis overflow-hidden'>
									Ultima actualizacion:{' '}
								</span>{' '}
								{formatDate(updatedAt)}
							</p>
							<p className='mb-2 text-gray-400 text-sm line-clamp'>{description}</p>
							<div>
								<span className='from-transparent flex font-semibold mb-2'>
									Tecnologías:{' '}
								</span>
								<div className='flex justify-between items-center w-full'>
									{technologies.map((technology, index) => (
										<figure key={index}>
											<Image
												alt={`${technology.toLowerCase()}`}
												src={`${technology}`}
												width={25}
												height={25}
												className='border border-zinc-800 rounded-full max-w-[25px] max-h-[25px]'
											/>
										</figure>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
			<div className='px-5 pb-5'>
				<Link
					href={githubUrl}
					target='_blank'
					className='flex items-center gap-1 hover:underline text-step--1 text-gray-400'
				>
					Visite el código fuente en GitHub.
				</Link>
			</div>
		</li>
	);
};
