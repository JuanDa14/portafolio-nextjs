import { useEffect, useState } from 'react';

export const ShowArrow = () => {
	const [showArrow, setShowArrow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
			setShowArrow(true);
		} else {
			setShowArrow(false);
		}
	};

	return (
		<>
			{showArrow && (
				<button
					className='fadeIn fixed z-50 bottom-5 right-5 md:bottom-10 md:right-10 bg-green-main text-black font-semibold rounded-full w-12 h-12 text-step-6 flex items-center justify-center'
					onClick={() => window.scrollTo(0, 0)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M4.5 15.75l7.5-7.5 7.5 7.5'
						/>
					</svg>
				</button>
			)}
		</>
	);
};

export default ShowArrow;
