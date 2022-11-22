import { FC } from 'react';

import { CardProject } from './';
import { IProject } from '../../interfaces';

interface Props {
	projects: IProject[];
}

export const CardListProject: FC<Props> = ({ projects = [] }) => {
	return (
		<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
			{projects.map((project) => (
				<CardProject key={project._id} {...project} />
			))}
		</div>
	);
};
