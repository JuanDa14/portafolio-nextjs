import { GetStaticProps } from 'next';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/layout/Layout';

import { abilityApi, projectApi } from '../api';
import { IAbility, IProject } from '../interfaces';
import { ViewAbilities, ViewAbout, ViewContact, ViewHeader, ViewProjects } from '../views';

interface Props {
	abilities: IAbility[];
	projects: IProject[];
}

const HomePage: FC<Props> = ({ abilities = [], projects = [] }) => {
	return (
		<Layout>
			<ViewHeader />
			<ViewAbout />
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

export const getStaticProps: GetStaticProps = async () => {
	const [{ data: abilities }, { data: projects }] = await Promise.all([
		await abilityApi.get<IAbility[]>('/'),
		await projectApi.get<IProject[]>('/'),
	]);

	return {
		props: {
			abilities,
			projects,
		},
	};
};
