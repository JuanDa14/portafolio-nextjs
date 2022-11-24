import { FC, useReducer, useEffect } from 'react';
import { myApi } from '../../api';
import { IAbility } from '../../interfaces';
import { AbilityContext } from './AbilityContext';
import { abilityReducer } from './abilityReducer';

export interface AbilityState {
	abilities: IAbility[];
}
const ABILITY_INITIAL_STATE: AbilityState = { abilities: [] };

interface Props {
	children: JSX.Element;
}

export const AbilityProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(abilityReducer, ABILITY_INITIAL_STATE);

	const getAbilities = async () => {
		const { data } = await (await myApi.get('/ability')).data;
		dispatch({ type: '[ABILITY] - Get-Abilities', payload: data });
	};

	useEffect(() => {
		getAbilities();
	}, []);

	return (
		<AbilityContext.Provider
			value={{
				...state,
				// Metodos
			}}
		>
			{children}
		</AbilityContext.Provider>
	);
};
