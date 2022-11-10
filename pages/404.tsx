import Head from 'next/head';

const Page404 = () => {
	return (
		<>
			<Head>
				<title>JuanCode</title>
			</Head>
			<section className='h-screen w-full flex flex-col justify-center items-center bg-twitch-dark font-roboto'>
				<h1 className='text-9xl font-extrabold text-white tracking-widest'>404</h1>
				<div className='bg-green-main  px-2 text-sm rounded rotate-12 absolute'>
					Page Not Found
				</div>
			</section>
		</>
	);
};

export default Page404;
