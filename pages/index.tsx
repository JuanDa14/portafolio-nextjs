import { ToastContainer } from 'react-toastify';

import { Layout } from '../components';
import { ViewAbilities, ViewAbout, ViewContact, ViewHeader, ViewProjects } from '../views';

const HomePage = () => {
	return (
		<>
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
		</>
	);
};

export default HomePage;
