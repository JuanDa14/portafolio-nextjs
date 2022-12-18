import { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import { ViewAbilities, ViewAbout, ViewContact, ViewHeader, ViewProjects } from '../views';

import Layout from '../components/layout/Layout';

const HomePage: NextPage = () => {
	return (
		<Layout>
			<ViewHeader />
			<ViewAbout />
			<ViewAbilities />
			<ViewProjects />
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
