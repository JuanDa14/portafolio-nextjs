import type { NextApiRequest, NextApiResponse } from 'next';

import Project from '../../../models/Project';
import { db } from '../../../database';
import { IProject } from '../../../interfaces';

type Data = { ok: boolean; message: string } | IProject[] | IProject;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'GET':
			return getProjects(res);

		case 'POST':
			return createProject(req, res);

		default:
			res.status(500).json({ message: 'Method Invalid', ok: false });
	}
}

const getProjects = async (res: NextApiResponse<Data>) => {
	try {
		await db.connect();

		const projects = await Project.find().select('-createdAt -updatedAt -__v').lean();

		await db.disconnect();

		res.status(200).json(projects);
	} catch (error) {
		console.log(error);
		await db.disconnect();
		res.status(500).json({ message: 'Server Error', ok: false });
	}
};

const createProject = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { title } = req.body as IProject;

	try {
		await db.connect();

		const projectInDB = await Project.findOne({ title }).lean();

		if (projectInDB) {
			await db.disconnect();
			return res.status(400).json({ message: 'Project already exists', ok: false });
		}

		const project = new Project(req.body);

		await project.save();

		await db.disconnect();

		return res.status(201).json(project);
	} catch (error) {
		console.log(error);
		await db.disconnect();
		return res.status(500).json({ message: 'Server Error', ok: false });
	}
};
