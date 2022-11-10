import { IProject, IAbility } from '../interfaces';

type Data = {
	ok: boolean;
	data: IAbility[] | IProject[];
};

export const myFetchApi = async (endpoint: string, method: string = 'GET'): Promise<Data> => {
	const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
		method,
	});

	const data = await resp.json();

	return data;
};
