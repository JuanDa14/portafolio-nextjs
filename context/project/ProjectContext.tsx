import { createContext } from 'react';
import { IProject } from '../../interfaces';

export interface ContextProps {
	projects: IProject[];
}
export const ProjectContext = createContext({} as ContextProps);
