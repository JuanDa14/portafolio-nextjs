import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProject } from '../../interfaces';
import { formatDate } from '../../utils';
import { CardSkeletonProject } from '../ui';

export const CardProject: FC<IProject> = ({
	title,
	description,
	technologies,
	githubUrl,
	imageUrl,
	websiteUrl,
	updatedAt,
}) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			{loading ? (
				<CardSkeletonProject />
			) : (
				<div className='bg-twitch-light/30 hover:bg-twitch-light/40 border border-zinc-800 rounded-lg shadow-md hover:cursor-pointer transition-colors duration-300 ease-in-out'>
					<Link href={websiteUrl} target='_blank'>
						<div>
							<Image
								className='rounded-t-lg h-full max-h-[250px]  object-cover'
								src={imageUrl}
								alt={title}
								width={500}
								height={250}
							/>
							<div>
								<div className='px-5 py-5'>
									<h1 className='font-bold text-step-0 whitespace-nowrap text-ellipsis overflow-hidden text-green-main mb-2'>
										{title}
									</h1>
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
												<Image
													key={index}
													alt={`${technology.toLowerCase()}`}
													src={`${technology}`}
													width={25}
													height={25}
													className='border border-zinc-800 rounded-full max-w-[25px] max-h-[25px]'
												/>
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
				</div>
			)}
		</>
	);
};
