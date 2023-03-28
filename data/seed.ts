import { BsInstagram, BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { TypedOptions } from 'typed.js';
import { IAbility, IProject, SocialMedia } from '../interfaces';

export const options: TypedOptions = {
	strings: ['FullStack Developer'],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true,
};

export const abilities: IAbility[] = [
	{
		name: 'html',
		type: 'Frontend',
		level: 'Avanzado',
		imageUrl: '/icons/html.svg',
	},
	{
		name: 'React',
		type: 'Frontend',
		level: 'Avanzado',
		imageUrl: '/icons/react.svg',
	},
	{
		name: 'Nextjs',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/nextjs.svg',
	},
	{
		name: 'Nestjs',
		type: 'Backend',
		level: 'Intermedio',
		imageUrl: '/icons/nest.svg',
	},
	{
		name: 'Bootstrap',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/bootstrap.svg',
	},
	{
		name: 'Express',
		type: 'Backend',
		level: 'Intermedio',
		imageUrl: '/icons/express.png',
	},
	{
		name: 'MongoDB',
		type: 'Database',
		level: 'Intermedio',
		imageUrl: '/icons/mongodb.svg',
	},
	{
		name: 'css',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/css.svg',
	},
	{
		name: 'JavaScript',
		type: 'Frontend',
		level: 'Avanzado',
		imageUrl: '/icons/javascript.svg',
	},
	{
		name: 'Styled Components',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/styled-components.png',
	},
	{
		name: 'Laravel',
		type: 'Backend',
		level: 'Intermedio',
		imageUrl: '/icons/laravel.png',
	},
	{
		name: 'TypeScript',
		type: 'Frontend',
		level: 'Avanzado',
		imageUrl: '/icons/typescript.svg',
	},
	{
		name: 'Nodejs',
		type: 'Backend',
		level: 'Avanzado',
		imageUrl: '/icons/nodejs.svg',
	},
	{
		name: 'PHP',
		type: 'Backend',
		level: 'Intermedio',
		imageUrl: '/icons/php.svg',
	},
	{
		name: 'GraphQL',
		type: 'Backend',
		level: 'Básico',
		imageUrl: '/icons/graphql.svg',
	},
	{
		name: 'MySQL',
		type: 'Database',
		level: 'Intermedio',
		imageUrl: '/icons/mysql.png',
	},
	{
		name: 'Sass',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/sass.png',
	},
	{
		name: 'Tailwind Css',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/tailwind-css.png',
	},
];

export const projects: IProject[] = [
	{
		title: 'Calendar App',
		description:
			'Aplicación de calendario con autenticación con Google y Facebook. Permite crear eventos, editarlos y eliminarlos.',
		technologies: [
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1669138347/icons/react_ikpzix.svg',
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1669138346/icons/javascript_d82qup.svg',
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1669138347/icons/tailwind-css_jgoa9f.png',
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1669138347/icons/nodejs_ppg1xg.svg',
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1669138346/icons/mongodb_xdiytd.svg',
		],
		imageUrl:
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1670880714/webp/calendarApp_j6ipci.webp',
		githubUrl: 'https://github.com/JuanDa14/calendar-front',
		websiteUrl: 'https://calendario-app.vercel.app',
		updatedAt: '1670791745721',
	},
	{
		title: 'Treelink App',
		description:
			'Aplicación de gestión de proyectos. Permite crear proyectos, agregar tareas, asignarlas a usuarios y cambiar su estado.',
		technologies: [
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1669138347/icons/react_ikpzix.svg',
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1669138346/icons/javascript_d82qup.svg',
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1669138347/icons/tailwind-css_jgoa9f.png',
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1669138347/icons/nodejs_ppg1xg.svg',
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1669138346/icons/mongodb_xdiytd.svg',
		],
		imageUrl:
			'https://res.cloudinary.com/dbvyaguam/image/upload/v1670880714/webp/treelinkApp_q3t3be.webp',
		githubUrl: 'https://github.com/JuanDa14/treelink-frontend',
		websiteUrl: 'https://treeliink.vercel.app',
		updatedAt: '1668977345721',
	},
];

export const socials: SocialMedia[] = [
	{
		name: 'Linkedin',
		Icon: BsLinkedin,
		url: 'https://www.linkedin.com/in/juan-david-morales-paredes-617342224',
	},
	{
		name: 'Github',
		Icon: BsGithub,
		url: 'https://github.com/JuanDa14',
	},
	{
		name: 'Instagram',
		Icon: BsInstagram,
		url: 'https://www.instagram.com/ju4n.code/',
	},
	{
		name: 'Facebook',
		Icon: BsFacebook,
		url: 'https://www.facebook.com/juandavid.moralesparedes',
	},
];
