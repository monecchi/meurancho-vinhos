import React from 'react'
import { useTheme } from 'next-themes'


export type DetailProps = {
	legend: string,
	icon: string,
	detail?: string,
}

export const ProductDetail = (props: DetailProps) => {

	const { systemTheme, theme, setTheme } = useTheme();

	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<div className="TechnicalDetails-description">
			<div className="Left">
				<i className={currentTheme === 'dark' ? `Icon icon-light Icon--${props.icon}` : `Icon Icon--${props.icon}`} />
			</div>
			<div className="Right">
				<dt className="w-caption">{props.legend}</dt>
				<dd className="w-paragraph">{props.detail}</dd>
			</div>
		</div>
	)
}
