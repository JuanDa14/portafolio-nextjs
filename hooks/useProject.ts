import { useContext } from 'react';
import { ProjectContext } from '../context/project';

export const useProject = () => {
	return useContext(ProjectContext);
};
