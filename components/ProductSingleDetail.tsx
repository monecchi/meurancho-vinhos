import React from 'react'

export type DetailProps = {
	legend: string,
	icon: string,
	detail?: string,
}

export const ProductDetail = (props: DetailProps) => {
	return (
		<div className="TechnicalDetails-description">
			<div className="Left">
				<i className={`Icon Icon--${props.icon}`} />
			</div>
			<div className="Right">
				<dt className="w-caption">{props.legend}</dt>
				<dd className="w-paragraph">{props.detail}</dd>
			</div>
		</div>
	)
}
