import { ProjectState } from './ProjectProvider';

import { IProject } from '../../interfaces';

type ProjectActionType = { type: '[PROJECT] - Get-Projects'; payload: IProject[] };

export const projectReducer = (state: ProjectState, action: ProjectActionType): ProjectState => {
	switch (action.type) {
		case '[PROJECT] - Get-Projects':
			return {
				...state,
				projects: action.payload,
			};

		default:
			return state;
	}
};
