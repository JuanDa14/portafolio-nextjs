import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

import { spinner } from '../../public/lottie';

type AnimationData = {
	v: string;
	fr: number;
	ip: number;
	op: number;
	w: number;
	h: number;
	nm: string;
	ddd: number;
	assets: any[];
	layers: any[];
	markers: any[];
};

export const AnimationLottie = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [animation, setAnimation] = useState<AnimationData | null>(null);
	const [showAnimation, setShowAnimation] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		import('../../public/lottie/coder.json').then((animation) => {
			setAnimation(animation);
			setIsLoading(false);
			setShowAnimation(true);
		});
	}, []);

	if (isLoading) {
		return (
			<div className='w-6/12 md:w-12/12 max-w-[480px] h-[640px] -z-10'>
				<Lottie
					renderer='svg'
					className='-z-10'
					width={400}
					height={640}
					animationData={spinner}
					loop
				/>
			</div>
		);
	}

	return (
		<div className='w-auto max-w-[480px] h-full -z-10'>
			<Lottie
				renderer='svg'
				className='-z-10'
				animationData={animation}
				loop
				autoplay={true}
				style={{
					opacity: showAnimation ? 1 : 0,
					transition: 'opacity 1s ease-in-out',
				}}
			/>
		</div>
	);
};
