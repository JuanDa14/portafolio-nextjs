import { FC } from 'react';
import { CardListProject } from '../components';
import { IProject } from '../interfaces';

interface Props {
	projects: IProject[];
}

export const ViewProjects: FC<Props> = ({ projects }) => {
	return (
		<section id='proyectos' className='mt-20'>
			<article>
				<h2 className='font-bold capitalize text-step-1'>Proyectos</h2>
				<CardListProject projects={projects} />
			</article>
		</section>
	);
};
