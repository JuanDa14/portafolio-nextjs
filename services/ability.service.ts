import axios from 'axios';
import { IAbility } from '../interfaces';

const api = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/ability`,
});

type Data = {
	ok: boolean;
	data: IAbility[];
	message?: string;
};

export const getAbilities = async (): Promise<Data> => {
	try {
		const { data } = await api.get<IAbility[]>('');

		return { ok: true, data };
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return { ok: false, data: [], message: error.response?.data };
		}

		return { ok: false, data: [] };
	}
};
