import { FC } from 'react';
import Head from 'next/head';

import { Footer, NavBar } from '../ui/index';

interface Props {
	title?: string;
	children: JSX.Element | JSX.Element[];
}

const origin = typeof window !== 'undefined' ? window.location.origin : '';

const Layout: FC<Props> = ({ children, title = 'JuanCode' }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='author' content='Juan David Morales Paredes' />
				<meta
					name='description'
					content='JuanCode - Sitio personal donde comparto mis conocimientos y algunos proyectos que he realizado.'
				/>
				<meta
					name='keywords'
					content='JuanCode, Juan Morales, Juan David Morales, Juan David Morales Paredes, Portafolio, Portafolio de Juan Morales'
				/>
				<meta property='og:title' content='JuanCode' />
				<meta
					property='og:description'
					content='JuanCode - Sitio personal donde comparto mis conocimientos y algunos proyectos que he realizado.'
				/>
				<meta property='og:image' content={`${origin}/imgs/coding.jpg`} />
			</Head>
			<NavBar />
			<main
				id='inicio'
				className='px-5 mx-auto font-roboto lg:px-10 lg:max-w-[1200px] xl:max-w-[1400px]'
			>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
