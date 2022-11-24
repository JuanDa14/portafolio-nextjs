import { createContext } from 'react';
import { IAbility } from '../../interfaces';

export interface ContextProps {
	abilities: IAbility[];
}
export const AbilityContext = createContext({} as ContextProps);
