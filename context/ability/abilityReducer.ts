import { IAbility } from '../../interfaces';
import { AbilityState } from './AbilityProvider';

type AbilityActionType = { type: '[ABILITY] - Get-Abilities'; payload: IAbility[] };

export const abilityReducer = (state: AbilityState, action: AbilityActionType): AbilityState => {
	switch (action.type) {
		case '[ABILITY] - Get-Abilities':
			return {
				...state,
				abilities: action.payload,
			};

		default:
			return state;
	}
};
