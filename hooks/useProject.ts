import { useContext } from 'react';
import { ProjectContext } from '../context';

export const useProject = () => {
	return useContext(ProjectContext);
};
