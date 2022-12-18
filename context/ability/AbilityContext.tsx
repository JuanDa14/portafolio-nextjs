import { createContext } from 'react';
import { IAbility } from '../../interfaces';

export interface ContextProps {
	abilities: IAbility[];
	loading: boolean;
}
export const AbilityContext = createContext({} as ContextProps);
