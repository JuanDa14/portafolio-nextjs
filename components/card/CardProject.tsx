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
						<Image
							className='rounded-t-lg'
							src={imageUrl}
							alt={title}
							width={500}
							height={250}
						/>
					</Link>
					<div className='p-5'>
						<h5 className='font-bold text-step-0 whitespace-nowrap text-ellipsis overflow-hidden text-green-main'>
							{title}
						</h5>
						<span className='text-step--1 font-semibold flex mb-1'>
							{formatDate(updatedAt)}
						</span>
						<p className='mb-3 text-gray-400 text-sm line-clamp'>{description}</p>
						<div className='flex justify-between items-center'>
							<Image
								alt={`${technologies[0].toLowerCase()}`}
								src={`/icons/${technologies[0]}.svg`}
								width={20}
								height={20}
								className='rounded-full shadow-md hover:shadow-lg'
							/>
							<div className='flex items-center gap-3'>
								<Link
									href={websiteUrl}
									target='_blank'
									className='hover:-translate-y-1 transition-transform duration-300'
								>
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
											d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
										/>
									</svg>
								</Link>
								<Link
									href={githubUrl}
									target='_blank'
									className='hover:-translate-y-1 transition-transform duration-300'
								>
									<svg
										stroke='currentColor'
										fill='currentColor'
										strokeWidth='0'
										viewBox='0 0 1024 1024'
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6'
									>
										<path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z'></path>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
