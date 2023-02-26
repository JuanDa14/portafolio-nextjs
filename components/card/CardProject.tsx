import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProject } from '../../interfaces';
import { BsGithub } from 'react-icons/bs';
import { DiVisualstudio } from 'react-icons/di';

export const CardProject: FC<IProject> = ({
	title,
	description,
	technologies,
	githubUrl,
	imageUrl,
	websiteUrl,
}) => {
	return (
		<li className=' list-none bg-twitch-light/30 border rounded-md shadow-md border-zinc-800 hover:scale-[1.02] transition-transform duration-300 ease-in-out'>
			<div>
				<figure>
					<Image
						priority
						className='rounded-t-md w-full h-48 object-cover object-center'
						src={imageUrl}
						alt={title}
						width={500}
						height={500}
					/>
				</figure>
				<div>
					<div className='px-5 py-5 flex flex-col gap-2'>
						<h2 className='font-bold text-xl whitespace-nowrap text-ellipsis overflow-hidden text-green-main'>
							{title}
						</h2>
						<p className='mb-2 text-gray-200 text-sm line-clamp'>{description}</p>
						<div className='flex justify-between items-center'>
							<div className='flex gap-3 items-center w-full'>
								{technologies.map((technology, index) => (
									<figure key={index}>
										<Image
											alt={`${technology.toLowerCase()}`}
											src={`${technology}`}
											width={25}
											height={25}
											className='max-w-[20px] max-h-[20px]'
										/>
									</figure>
								))}
							</div>
							<div className='flex gap-3 items-center'>
								<Link
									title='Website'
									href={websiteUrl}
									target='_blank'
									className='text-gray-400 hover:text-white transition-colors duration-300 ease-in-out'
								>
									<DiVisualstudio size={20} />
								</Link>
								<Link
									title='Github'
									href={githubUrl}
									target='_blank'
									className='text-gray-400 hover:text-white transition-colors duration-300 ease-in-out'
								>
									<BsGithub size={20} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
