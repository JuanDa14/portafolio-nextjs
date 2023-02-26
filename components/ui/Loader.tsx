import { useEffect, useRef } from 'react';

export const Loader = () => {
	const containerProgress = useRef() as React.MutableRefObject<HTMLDivElement>;
	const progressBar = useRef() as React.MutableRefObject<HTMLDivElement>;

	const startProgress = () => {
		progressBar.current.style.width = '0%';
	};

	const endProgress = () => {
		progressBar.current.style.width = '100%';
	};

	const hideProgress = () => {
		containerProgress.current.style.opacity = '0';
	};

	const startLoading = () => {
		startProgress();
	};

	const endLoading = () => {
		endProgress();
		const timer = setTimeout(() => {
			hideProgress();
			clearTimeout(timer);
		}, 350);
	};

	useEffect(() => {
		startLoading();

		window.addEventListener('load', endLoading);

		return () => {
			window.removeEventListener('load', startLoading);
		};
	}, []);

	return (
		<div
			ref={containerProgress}
			className='top-0 left-0 w-full h-1 relative'
			style={{ opacity: '1', transition: 'opacity 0.5s linear' }}
		>
			<div
				ref={progressBar}
				className='h-full bg-gray-400 absolute'
				style={{ width: '0%', transition: 'width 1s ease-in-out' }}
			/>
		</div>
	);
};
