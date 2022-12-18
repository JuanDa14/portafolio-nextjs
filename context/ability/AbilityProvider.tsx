import { FC, useReducer, useEffect, useState } from 'react';
import { AbilityContext } from './AbilityContext';
import { abilityReducer } from './abilityReducer';

import { myApi } from '../../api';
import { IAbility } from '../../interfaces';

export interface AbilityState {
	abilities: IAbility[];
}
const ABILITY_INITIAL_STATE: AbilityState = { abilities: [] };

interface Props {
	children: JSX.Element;
}

export const AbilityProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(abilityReducer, ABILITY_INITIAL_STATE);

	const [loading, setLoading] = useState(false);

	const getAbilities = async () => {
		setLoading(true);
		const { data } = await myApi.get<IAbility[]>('/ability');
		console.log(data, 'abilities');
		dispatch({ type: '[ABILITY] - Get-Abilities', payload: data });
		setLoading(false);
	};

	useEffect(() => {
		getAbilities();
	}, []);

	return (
		<AbilityContext.Provider
			value={{
				...state,
				loading,
				// Metodos
			}}
		>
			{children}
		</AbilityContext.Provider>
	);
};
