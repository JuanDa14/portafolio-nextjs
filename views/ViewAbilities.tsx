import { CardListAbility } from '../components';
import { useAbility } from '../hooks';

export const ViewAbilities = () => {
	const { abilities } = useAbility();

	return (
		<section className='my-28' id='conocimientos'>
			<article>
				<h2 className='capitalize font-semibold text-step-1 mb-10'>Conocimientos</h2>
				<div className='flex flex-col gap-10 capitalize text-step-0'>
					<div className='flex-1'>
						<p className='mb-6 text-center'>Frontend</p>
						<CardListAbility abilities={abilities} type='Frontend' />
					</div>
					<div className='flex-1 text-center'>
						<p className='mb-6'>Backend</p>
						<CardListAbility abilities={abilities} type='Backend' />
					</div>
					<div className=' flex-1 text-center'>
						<p className='mb-6'>Database</p>
						<CardListAbility abilities={abilities} type='Database' />
					</div>
				</div>
			</article>
		</section>
	);
};
