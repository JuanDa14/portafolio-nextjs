import { CardListProject } from '../components';
import { useProject } from '../hooks';

export const ViewProjects = () => {
	const { projects } = useProject();

	return (
		<section id='proyectos' className='mt-20'>
			<article>
				<h3 className='font-bold capitalize text-step-1'>Proyectos</h3>
				<CardListProject projects={projects} />
			</article>
		</section>
	);
};
