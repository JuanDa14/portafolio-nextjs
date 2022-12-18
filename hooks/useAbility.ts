import { useContext } from 'react';
import { AbilityContext } from '../context/ability';

export const useAbility = () => {
	return useContext(AbilityContext);
};
