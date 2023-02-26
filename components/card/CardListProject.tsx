import { FC } from 'react';

import { IProject } from '../../interfaces';
import { CardProject } from './index';

interface Props {
	projects: IProject[];
}

export const CardListProject: FC<Props> = ({ projects }) => {
	return (
		<ul className='grid grid-cols-fit-250 justify-center md:justify-start gap-4 mt-10'>
			{projects.map((project) => (
				<CardProject key={project.title} {...project} />
			))}
		</ul>
	);
};
