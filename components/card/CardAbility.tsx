import { FC } from 'react';
import Image from 'next/image';

import { IAbility } from '../../interfaces';

export const CardAbility: FC<IAbility> = ({ name, imageUrl, level }) => {
	return (
		<li className='list-none flex flex-col gap-5 justify-center items-center p-4 rounded-lg bg-twitch-light/30 hover:bg-twitch-light/40 hover:cursor-pointer transition-colors duration-300 ease-in-out'>
			<figure>
				<Image src={imageUrl} width={50} height={50} alt={name} className='w-[50px] h-[50px]' />
			</figure>
			<div className='text-step--1 text-center'>
				<p className='capitalize font-semibold '>{name}</p>
				<span className='text-gray-400'>{level}</span>
			</div>
		</li>
	);
};
