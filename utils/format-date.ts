const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

export const formatDate = (date: string) => {
	const newDate = new Date(date);
	const day = newDate.getDate();
	const month = newDate.getMonth();
	const year = newDate.getFullYear();

	return `${day} ${months[month]}. ${year}`;
};
