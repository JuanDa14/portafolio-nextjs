import { useContext } from 'react';
import { AbilityContext } from '../context';

export const useAbility = () => {
	return useContext(AbilityContext);
};
