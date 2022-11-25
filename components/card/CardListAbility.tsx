import { FC } from 'react';

import { CardAbility } from './';
import { IAbility } from '../../interfaces';
import { CardSkeletonAbility } from '../ui';
import { useAbility } from '../../hooks';

interface Props {
	abilities: IAbility[];
	type: 'Frontend' | 'Backend' | 'Database';
}

export const CardListAbility: FC<Props> = ({ abilities, type }) => {
	const { loading } = useAbility();

	const skeletonAbilities = Array.from({ length: 4 }, (_, i) => i);

	return (
		<>
			{loading ? (
				<div className='grid grid-cols-fit-200 gap-5'>
					{skeletonAbilities.map((_, i) => (
						<CardSkeletonAbility key={i} />
					))}
				</div>
			) : (
				<div className='grid grid-cols-fit-200 gap-5'>
					{abilities
						.filter((f) => f.type === type)
						.map((a) => (
							<CardAbility {...a} key={a._id} />
						))}
				</div>
			)}
		</>
	);
};
