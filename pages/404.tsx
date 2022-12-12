import Head from 'next/head';

const Page404 = () => {
	return (
		<>
			<Head>
				<title>JuanCode</title>
			</Head>
			<section className='h-screen w-full flex flex-col justify-center items-center bg-twitch-dark font-roboto'>
				<h2 className='text-9xl font-extrabold text-white tracking-widest'>404</h2>
				<p className='bg-green-main  px-2 text-sm rounded rotate-12 absolute'>Page Not Found</p>
			</section>
		</>
	);
};

export default Page404;
