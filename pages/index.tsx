import { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/layout/Layout';

import { ViewAbilities, ViewContact, ViewHeader, ViewProjects } from '../views';
import { seed } from '../data';

const HomePage: NextPage = () => {
	return (
		<Layout>
			<ViewHeader />
			<ViewAbilities abilities={seed.abilities} />
			<ViewProjects projects={seed.projects} />
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
