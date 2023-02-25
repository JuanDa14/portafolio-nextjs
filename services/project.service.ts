import axios from 'axios';
import { IProject } from '../interfaces';

const api = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/project`,
});

type Data = {
	ok: boolean;
	data: IProject[];
	message?: string;
};

export const getProjects = async (): Promise<Data> => {
	try {
		const { data } = await api.get<IProject[]>('');
		return { ok: true, data };
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return { ok: false, data: [], message: error.response?.data };
		}

		return { ok: false, data: [] };
	}
};
