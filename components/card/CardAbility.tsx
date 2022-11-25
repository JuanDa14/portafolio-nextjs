import { FC } from 'react';
import Image from 'next/image';

import { IAbility } from '../../interfaces';

export const CardAbility: FC<IAbility> = ({ name, imageUrl, level }) => {
	return (
		<div className='flex flex-col gap-5 justify-center items-center p-4 rounded-lg bg-twitch-light/30 hover:bg-twitch-light/40 hover:cursor-pointer transition-colors duration-300 ease-in-out'>
			<Image src={imageUrl} width={50} height={50} alt={name} className='w-[50px] h-[50px]' />
			<div className='text-step--1 text-center'>
				<p className='capitalize font-semibold '>{name}</p>
				<span className='text-gray-400'>{level}</span>
			</div>
		</div>
	);
};
