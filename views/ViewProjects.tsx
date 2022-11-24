import { CardListProject, CardSkeletonProject } from '../components';
import { useProject } from '../hooks';

export const ViewProjects = () => {
	const { projects, loading } = useProject();

	const lengthProjects = Array.from({ length: 4 }, (_, i) => i);

	return (
		<section id='proyectos' className='mt-20'>
			<article>
				<h3 className='font-bold capitalize text-step-1'>Proyectos</h3>
				{loading ? (
					<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
						{lengthProjects.map((_, i) => (
							<CardSkeletonProject key={i} />
						))}
					</div>
				) : (
					<CardListProject projects={projects} />
				)}
			</article>
		</section>
	);
};
