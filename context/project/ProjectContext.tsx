import { createContext } from 'react';
import { IProject } from '../../interfaces';

export interface ProjectContextProps {
	projects: IProject[];
	loading: boolean;
}

export const ProjectContext = createContext({} as ProjectContextProps);
