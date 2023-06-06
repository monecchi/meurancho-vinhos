import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Button from '@/components/Button'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'

const ThemeSwitchButton = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderThemeSwitch = () => {
		if (!mounted) return null;

		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<Button className="font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
					onClick={() => setTheme('light')}
				>
					<SunIcon className="h-6 w-6 text-brand-50" />
					<span className="sr-only">Light</span>
				</Button>
			)
		} else {
			return (
				<Button className="font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
					onClick={() => setTheme('dark')}
				>
					<MoonIcon className="h-6 w-6 text-gray-700" />
					<span className="sr-only">Dark</span>
				</Button>
			)
		}
	}

	return (
		<>
			{renderThemeSwitch()}
		</>
	)
}

export default ThemeSwitchButton
