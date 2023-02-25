import { FC } from 'react';

import { CardListProject } from '../components';
import { IProject } from '../interfaces';

interface Props {
	projects: IProject[];
}

export const ViewProjects: FC<Props> = ({ projects }) => {
	return (
		<section id='proyectos' className='my-16'>
			<article className='lg:max-w-5xl xl:max-w-6xl mx-auto -z-10'>
				<h2 className='font-bold capitalize text-step-1'>Proyectos</h2>
				<CardListProject projects={projects} />
			</article>
		</section>
	);
};
