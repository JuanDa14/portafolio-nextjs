import { FC } from 'react';

import { CardProject } from './';
import { IProject } from '../../interfaces';

interface Props {
	projects: IProject[];
}

export const CardListProject: FC<Props> = ({ projects }) => {
	return (
		<div className='grid grid-cols-fit-250 gap-5 mt-10'>
			{projects.map((project) => (
				<CardProject key={project._id} {...project} />
			))}
		</div>
	);
};
