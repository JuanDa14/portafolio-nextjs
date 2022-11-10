import axios from 'axios';

export const projectApi = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/project`,
});
