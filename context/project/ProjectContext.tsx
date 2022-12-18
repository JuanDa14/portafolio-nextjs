import { createContext } from 'react';
import { IProject } from '../../interfaces';

export interface ContextProps {
	projects: IProject[];
	loading: boolean;
}

export const ProjectContext = createContext({} as ContextProps);
