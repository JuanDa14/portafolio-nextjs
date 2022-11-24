import { CardListAbility, CardSkeletonAbility } from '../components';
import { useAbility } from '../hooks';

export const ViewAbilities = () => {
	const { abilities, loading } = useAbility();

	const lengthAbilities = Array.from({ length: 6 }, (_, i) => i);

	return (
		<section className='mt-[28rem]' id='conocimientos'>
			<article>
				<h2 className='capitalize font-semibold text-step-1 mb-10'>Conocimientos</h2>
				<div className='flex flex-col gap-10 capitalize text-step-0'>
					<div className='flex-1'>
						<p className='mb-6 text-center'>Frontend</p>
						{loading ? (
							<div className='grid grid-cols-fit-200 gap-5'>
								{lengthAbilities.map((_, i) => (
									<CardSkeletonAbility key={i} />
								))}
							</div>
						) : (
							<CardListAbility abilities={abilities} type='Frontend' />
						)}
					</div>
					<div className='flex-1 text-center'>
						<p className='mb-6'>Backend</p>
						{loading ? (
							<div className='grid grid-cols-fit-200 gap-5'>
								{lengthAbilities.map((_, i) => (
									<CardSkeletonAbility key={i} />
								))}
							</div>
						) : (
							<CardListAbility abilities={abilities} type='Backend' />
						)}
					</div>
					<div className=' flex-1 text-center'>
						<p className='mb-6'>Database</p>
						{loading ? (
							<div className='grid grid-cols-fit-200 gap-5'>
								{lengthAbilities.map((_, i) => (
									<CardSkeletonAbility key={i} />
								))}
							</div>
						) : (
							<CardListAbility abilities={abilities} type='Database' />
						)}
					</div>
				</div>
			</article>
		</section>
	);
};
