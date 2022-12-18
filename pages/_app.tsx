import type { AppProps } from 'next/app';
import { AbilityProvider } from '../context/ability';
import { ProjectProvider } from '../context/project';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ProjectProvider>
			<AbilityProvider>
				<Component {...pageProps} />
			</AbilityProvider>
		</ProjectProvider>
	);
}

export default MyApp;
