import { GetServerSideProps, NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import { myApi } from '../api';
import { IAbility, IProject } from '../interfaces';
import { ViewAbilities, ViewAbout, ViewContact, ViewHeader, ViewProjects } from '../views';

import Layout from '../components/layout/Layout';

interface Props {
	projects: IProject[];
	abilities: IAbility[];
}

const HomePage: NextPage<Props> = ({ projects, abilities }) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
	const [{ data: projects }, { data: abilities }] = await Promise.all([
		await myApi.get<IProject[]>('/project'),
		await myApi.get<IAbility[]>('/ability'),
	]);

	if (projects.length <= 0 || abilities.length <= 0) {
		return {
			redirect: {
				destination: '/404',
				permanent: false,
			},
		};
	}

	return {
		props: {
			projects,
			abilities,
		},
	};
};

export default HomePage;
