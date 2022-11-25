import { FC, useReducer, useEffect, useState } from 'react';
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

type Data = { data: IProject[] };

export const ProjectProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(projectReducer, PROJECT_INITIAL_STATE);

	const [loading, setLoading] = useState(false);

	const getProjects = async () => {
		setLoading(true);
		const { data } = await (await myApi.get<Data>('/project')).data;
		dispatch({ type: '[PROJECT] - Get-Projects', payload: data });
		setLoading(false);
	};

	useEffect(() => {
		getProjects();
	}, []);

	return (
		<ProjectContext.Provider
			value={{
				...state,
				loading,
				// Metodos
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};
