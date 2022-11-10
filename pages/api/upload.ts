import type { NextApiRequest, NextApiResponse } from 'next';

import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env.CLOUDINARY_URL as string);

type Data = {
	ok: boolean;
	message: string;
};

export const config = {
	api: {
		bodyParser: false,
	},
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'POST':
			return parseFiles(req, res, 'projects');

		default:
			res.status(500).json({ message: 'Method Invalid', ok: false });
	}
}

const saveFile = async (file: formidable.File, collection: string): Promise<string> => {
	const { secure_url } = await cloudinary.uploader.upload(file.filepath, {
		folder: process.env.CLOUDINARY_FOLDER_NAME + '/' + collection,
	});
	return secure_url;
};

export const parseFiles = async (
	req: NextApiRequest,
	res: NextApiResponse<Data>,
	collection: string
) => {
	return new Promise((resolve, reject) => {
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			if (err) return reject(err);

			const imageUrl = await saveFile(files.file as formidable.File, collection);
			resolve(res.status(200).json({ ok: true, message: imageUrl }));
		});
	});
};
