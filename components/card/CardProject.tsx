import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProject } from '../../interfaces';
import { formatDate } from '../../utils';
import { BsGithub } from 'react-icons/bs';

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
		<li className=' list-none bg-twitch-light/30 border border-zinc-800 rounded-md shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out'>
			<div>
				<Link title='Website' href={websiteUrl} target='_blank'>
					<figure>
						<Image
							priority
							className='rounded-t-md w-full h-56 object-cover object-center'
							src={imageUrl}
							alt={title}
							width={500}
							height={500}
						/>
					</figure>
				</Link>
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
							<Link
								title='Github'
								href={githubUrl}
								target='_blank'
								className='text-white transition-colors duration-300 ease-in-out'
							>
								<BsGithub size={20} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
