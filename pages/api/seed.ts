import type { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../database';
import Ability from '../../models/Ability';
import Project from '../../models/Project';

import { abilities, projects } from '../../constant';

type Data = {
	ok: boolean;
	message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (process.env.NODE_ENV === 'production') {
		return res.status(403).json({ message: 'Forbidden', ok: false });
	}

	await db.connect();

	await Ability.deleteMany();
	await Project.deleteMany();

	await Ability.insertMany(abilities);
	await Project.insertMany(projects);

	await db.disconnect();

	res.status(201).json({ message: 'DataBase with seeders', ok: true });
}
