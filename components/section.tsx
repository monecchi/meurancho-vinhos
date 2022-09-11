interface SectionProps {
	children: React.ReactNode
}

const Section = (props: any) => {
	const { children } = props
	return (
		<section
			{...props}
		>
			{children}
		</section>
	)
}


export const SectionHalf = ({ children }: SectionProps) => (
	<section className='mt-5'>{children}</section>
)

export default Section
