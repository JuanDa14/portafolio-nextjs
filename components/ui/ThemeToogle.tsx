import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { MdDarkMode, MdLightMode } from 'react-icons/md';

export const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			{theme === 'light' ? (
				<>
					<MdDarkMode size={20} />
				</>
			) : (
				<>
					<MdLightMode size={20} />
				</>
			)}
		</button>
	);
};
