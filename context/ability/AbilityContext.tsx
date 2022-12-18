import { createContext } from 'react';
import { IAbility } from '../../interfaces';

export interface AbilityContextProps {
	abilities: IAbility[];
	loading: boolean;
}
export const AbilityContext = createContext({} as AbilityContextProps);
