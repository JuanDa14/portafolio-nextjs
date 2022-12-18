import { FC } from 'react';

import { CardAbility } from './';
import { IAbility } from '../../interfaces';
import { useAbility } from '../../hooks';
import { CardSkeletonAbility } from '../ui';

interface Props {
	abilities: IAbility[];
	type: 'Frontend' | 'Backend' | 'Database';
}

const skeleton = Array.from({ length: 4 }, (_, i) => i);

export const CardListAbility: FC<Props> = ({ abilities, type }) => {
	const { loading } = useAbility();

	return (
		<ul className='grid grid-cols-fit-200 gap-5'>
			{loading
				? skeleton.map((__, key) => <CardSkeletonAbility key={key} />)
				: abilities
						.filter((f) => f.type === type)
						.map((a) => <CardAbility {...a} key={a._id} />)}
		</ul>
	);
};
