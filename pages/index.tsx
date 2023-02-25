import { NextPage, GetServerSideProps } from 'next';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/layout/Layout';

import { ViewAbilities, ViewContact, ViewHeader, ViewProjects } from '../views';
import { abilityService, projectService } from '../services';
import { IAbility, IProject } from '../interfaces';

interface Props {
	projects: IProject[];
	abilities: IAbility[];
}

const HomePage: NextPage<Props> = ({ abilities, projects }) => {
	return (
		<Layout>
			<ViewHeader />
			<ViewAbilities abilities={abilities} />
			<ViewProjects projects={projects} />
			<ViewContact />
			<ToastContainer
				autoClose={3000}
				position='top-center'
				draggable
				pauseOnFocusLoss={false}
			/>
		</Layout>
	);
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
	const { data: projects } = await projectService.getProjects();
	const { data: abilities } = await abilityService.getAbilities();

	return {
		props: {
			projects,
			abilities,
		},
	};
};
