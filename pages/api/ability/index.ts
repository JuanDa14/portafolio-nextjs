import type { NextApiRequest, NextApiResponse } from 'next';

import Ability from '../../../models/Ability';
import { db } from '../../../database';
import { IAbility } from '../../../interfaces';

type Data = { ok: boolean; message: string } | IAbility[] | IAbility;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'GET':
			return getAbilities(res);

		case 'POST':
			return createAbility(req, res);

		default:
			res.status(500).json({ message: 'Method Invalid', ok: false });
	}
}

const getAbilities = async (res: NextApiResponse<Data>) => {
	try {
		await db.connect();

		const projects = await Ability.find().select('-createdAt -updatedAt -__v').lean();

		await db.disconnect();

		res.status(200).json(projects);
	} catch (error) {
		console.log(error);
		await db.disconnect();
		res.status(500).json({ message: 'Server Error', ok: false });
	}
};

const createAbility = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { name } = req.body as IAbility;

	try {
		await db.connect();

		const abilityInDB = await Ability.findOne({ name }).lean();

		if (abilityInDB) {
			await db.disconnect();
			return res.status(400).json({ message: 'Project already exists', ok: false });
		}

		const ability = new Ability(req.body);

		await ability.save();

		await db.disconnect();

		return res.status(201).json(ability);
	} catch (error) {
		console.log(error);
		await db.disconnect();
		return res.status(500).json({ message: 'Server Error', ok: false });
	}
};
