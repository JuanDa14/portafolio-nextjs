import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { myApi } from '../api';

export type DataEmail = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type ServerError = { errors: { message: string; field: string }[] };

export const sendEmail = async (values: DataEmail) => {
	try {
		const { data } = await myApi.post('/contact', values);
		toast.success(data.message);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const serverError = error as AxiosError<ServerError>;
			if (serverError && serverError.response) {
				toast.error(serverError.response.data.errors[0].message);
			}
		} else {
			toast.error('Algo salió mal');
		}
	}
};
