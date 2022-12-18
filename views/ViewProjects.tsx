import { CardListProject } from '../components';
import { useProject } from '../hooks';

export const ViewProjects = () => {
	const { projects } = useProject();

	return (
		<section id='proyectos' className='mt-20'>
			<article>
				<h2 className='font-bold capitalize text-step-1'>Proyectos</h2>
				<CardListProject projects={projects} />
			</article>
		</section>
	);
};
