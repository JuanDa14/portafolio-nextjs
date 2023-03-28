import Link from 'next/link';
import { FC } from 'react';
import { SocialMedia } from '../../interfaces';

interface Props {
	socials: SocialMedia[];
}

export const SocialLinks: FC<Props> = ({ socials }) => {
	return (
		<ul className='flex gap-3'>
			{socials.map(({ name, Icon, url }) => (
				<li
					className='text-gray-400 hover:scale-110 hover:text-white transition-all duration-300'
					key={name}
				>
					<Link href={url} passHref legacyBehavior>
						<a target='_blank'>
							<Icon size={20} />
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};
