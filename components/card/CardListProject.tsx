import { FC } from 'react';

import { CardProject } from './';
import { IProject } from '../../interfaces';
import { useProject } from '../../hooks';
import { CardSkeletonProject } from '../ui';

interface Props {
	projects: IProject[];
}

const skeleton = Array.from({ length: 4 }, (_, i) => i);

export const CardListProject: FC<Props> = ({ projects }) => {
	const { loading } = useProject();

	return (
		<ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
			{loading
				? skeleton.map((__, key) => <CardSkeletonProject key={key} />)
				: projects.map((project) => <CardProject key={project._id} {...project} />)}
		</ul>
	);
};
