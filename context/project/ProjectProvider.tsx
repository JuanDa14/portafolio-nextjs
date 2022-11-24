import { FC, useReducer, useEffect } from 'react';
import { myApi } from '../../api';
import { IProject } from '../../interfaces';
import { ProjectContext } from './ProjectContext';
import { projectReducer } from './projectReducer';

export interface ProjectState {
	projects: IProject[];
}

const PROJECT_INITIAL_STATE: ProjectState = { projects: [] };
interface Props {
	children: JSX.Element;
}

export const ProjectProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(projectReducer, PROJECT_INITIAL_STATE);

	const getProjects = async () => {
		const { data } = await (await myApi.get('/project')).data;
		dispatch({ type: '[PROJECT] - Get-Projects', payload: data });
	};

	useEffect(() => {
		getProjects();
	}, []);

	return (
		<ProjectContext.Provider
			value={{
				...state,
				// Metodos
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};
